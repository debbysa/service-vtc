import axios from 'axios'
import { Config } from './Config'
import { IGetCategory } from '../interfaces/category.interface'
import { ConfigDataSign } from './ConfigDataSign'
import { ConfigDataInfo } from './ConfigDataInfo'

export class GetAllCategory {
  private cfg: Config

  constructor(config: Config) {
    this.cfg = config
  }

  getAllCategory = async (data: IGetCategory) => {
    const combinedParams =
      data.partnerCode +
      '|' +
      data.categoryID +
      '|' +
      data.productID +
      '|' +
      data.productAmount +
      '|' +
      data.customerID +
      '|' +
      data.partnerTransID +
      '|' +
      data.partnerTransDate +
      '|' +
      data.data

    console.log(this.cfg.getPrivateKey)

    let encodeDataSign = new ConfigDataSign()

    let dataSignBase64 = await encodeDataSign.getDataSign({
      privateKey: this.cfg.getPrivateKey.toString(),
      combinedParams,
    })
    // const prvKey = rs.KEYUTIL.getKey(this.cfg.getPrivateKey.toString(), 'passwd')

    // const sig = new rs.KJUR.crypto.Signature({ alg: 'SHA256withRSA' })
    // sig.init(prvKey)
    // sig.updateString(combinedParams)
    // // this return hex format
    // const signVal = sig.sign()
    // // convert hex format to Base64. So it can matched in request params to VTC API
    // const dataSignBase64 = cryptoJs.enc.Base64.stringify(cryptoJs.enc.Hex.parse(signVal))

    data.dataSign = dataSignBase64

    console.log('value dataSign: ', data.dataSign)

    let headers = {
      'Content-Type': 'application/json',
    }
    try {
      const response = await axios.post(
        this.cfg.domain_url + '/share/GetInfo/get-all-category',
        data,
        {
          headers,
        }
      )

      if (response.data.dataInfo) {
        let dataInfoConfig = new ConfigDataInfo()
        let dataInfoDecode = dataInfoConfig.getDataInfo(response.data.dataInfo)
        console.log(dataInfoDecode)
        response.data.dataInfo = dataInfoDecode
      }

      console.log('get All Category VTC response: ', response.data)
      console.log('get All Category VTC status: ', response.status)

      return {
        data: response.data,
        status: response.status,
      }
    } catch (error) {
      if (error.response) {
        console.log('get All Category VTC response = ', error.response.data)
        console.log('status error = ', error.response.status)
        return {
          status: error.response.status,
          data: error.response.data,
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request)
        return {
          message: error.request,
        }
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('get All Category VTC Error message = ', error.message)
        return {
          message: error.message,
        }
      }
    }
  }
}

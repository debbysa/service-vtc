import axios from 'axios'
import { Config } from './Config'
import { IGetCategory } from '../interfaces/category.interface'
import { ConfigDataSign } from './ConfigDataSign'
import { ConfigDataInfo } from './ConfigDataInfo'

export class GetCategory {
  private cfg: Config

  constructor(config: Config) {
    this.cfg = config
  }

  getCategory = async (data: IGetCategory) => {
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

    let dataSignBase64 = encodeDataSign.getDataSign({
      privateKey: this.cfg.getPrivateKey.toString(),
      combinedParams,
    })

    data.dataSign = dataSignBase64

    console.log('value dataSign: ', data.dataSign)

    let headers = {
      'Content-Type': 'application/json',
    }

    try {
      const response = await axios.post(this.cfg.domain_url + '/share/GetInfo/get-category', data, {
        headers,
      })

      //   let dataInfoDecode = ''
      if (response.data.dataInfo) {
        let dataInfoConfig = new ConfigDataInfo()
        let dataInfoDecode = dataInfoConfig.getDataInfo(response.data.dataInfo)
        console.log(dataInfoDecode)
        response.data.dataInfo = dataInfoDecode
        // console.log('lalalalal')
        // const dataInfoBase64 = cryptoJs.enc.Base64.parse(response.data.dataInfo)
        // dataInfoDecode = cryptoJs.enc.Utf8.stringify(dataInfoBase64)
        // // console.log(dataInfoDecode)
        // response.data.dataInfo = JSON.parse(dataInfoDecode)
      }

      console.log('get Category VTC response: ', response.data)
      console.log('get Category VTC status: ', response.status)

      return {
        data: response.data.dataInfo,
        status: response.status,
      }
    } catch (error) {
      if (error.response) {
        console.log('get Category VTC response = ', error.response.data)
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
        console.log('get Category VTC Error message = ', error.message)
        return {
          message: error.message,
        }
      }
    }
  }
}

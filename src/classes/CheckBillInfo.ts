import axios from 'axios'
import { IGetCategory } from '../interfaces/requestvtc.interface'
import { Config } from './Config'
import { ConfigDataInfo } from './ConfigDataInfo'
import { ConfigDataSign } from './ConfigDataSign'
import { VerifyDataSign } from './VerifyDataSign'

export class CheckBillInfo {
  private cfg: Config

  constructor(config: Config) {
    this.cfg = config
  }

  checkBillInfo = async (data: IGetCategory) => {
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

    let encodeDataSign = new ConfigDataSign()

    let dataSignBase64 = encodeDataSign.getDataSign({
      privateKey: this.cfg.getPrivateKey.toString(),
      combinedParams,
    })

    data.dataSign = dataSignBase64

    // console.log('value dataSign: ', data.dataSign)

    let headers = {
      'Content-Type': 'application/json',
    }

    try {
      const response = await axios.post(
        this.cfg.domain_url + '/share/GetInfo/check-bill-info',
        data,
        {
          headers,
        }
      )

      if (response.data.dataSign === '') {
        // console.log('check bill info VTC response: ', response.data)
        // console.log('check bill info VTC status: ', response.status)
        return {
          data: response.data,
          status: response.status,
        }
      } else {
        const combinedParamsResponse =
          response.data.responseCode +
          '|' +
          response.data.status +
          '|' +
          response.data.partnerTransID +
          '|' +
          response.data.description +
          '|' +
          response.data.dataInfo

        let verifyDataSignFromVTC = new VerifyDataSign()
        let { message } = verifyDataSignFromVTC.verifyDataSign({
          combinedParamsResponse,
          dataSign: response.data.dataSign,
          publicKey: this.cfg.getPublicKey.toString(),
        })

        if (response.data.dataInfo) {
          let dataInfoConfig = new ConfigDataInfo()
          let dataInfoDecode = dataInfoConfig.getDataInfo(response.data.dataInfo)
          // console.log(dataInfoDecode)
          response.data.dataInfo = dataInfoDecode
        }

        console.log('verify dataSign: ', message)
        // console.log('check bill info VTC response: ', response.data)
        // console.log('check bill info VTC status: ', response.status)

        // pake IF aja, nanti kalo sign invalid -> status = FALSE, kalo valid -> TRUE
        if (message === true) {
          return {
            message: 'signature VALID',
            data: response.data,
            status: true,
          }
        } else {
          return {
            message: 'signature NOT VALID',
            data: response.data,
            status: false,
          }
        }
      }
    } catch (error) {
      if (error.response) {
        console.log('checkBillInfo VTC response = \n', error.response.data)
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
        console.log('checkBillInfo VTC Error message = \n', error.message)
        return {
          message: error.message,
        }
      }
    }
  }
}

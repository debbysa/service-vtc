import cryptoJs from 'crypto-js'

export class ConfigDataInfo {
  getDataInfo = (data: string) => {
    const dataInfoBase64 = cryptoJs.enc.Base64.parse(data)
    let dataInfoDecode = cryptoJs.enc.Utf8.stringify(dataInfoBase64)
    // console.log(dataInfoDecode)
    return JSON.parse(dataInfoDecode)
  }
}

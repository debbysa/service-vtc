import { IGetDataSign } from '../interfaces/requestvtc.interface'
import rs from 'jsrsasign'
import cryptoJs from 'crypto-js'

export class ConfigDataSign {
  getDataSign = (data: IGetDataSign) => {
    const prvKey = rs.KEYUTIL.getKey(data.privateKey, 'passwd')

    const sig = new rs.KJUR.crypto.Signature({ alg: 'SHA256withRSA' })
    sig.init(prvKey)
    sig.updateString(data.combinedParams)
    // this return hex format
    const signVal = sig.sign()
    // convert hex format to Base64. So it can matched in request params to VTC API
    const dataSignBase64 = cryptoJs.enc.Base64.stringify(cryptoJs.enc.Hex.parse(signVal))

    return dataSignBase64
  }
}

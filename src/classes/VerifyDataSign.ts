import { IVerifyDataSign } from '../interfaces/requestvtc.interface'
import rs from 'jsrsasign'
import cryptoJs from 'crypto-js'

export class VerifyDataSign {
  verifyDataSign = (data: IVerifyDataSign) => {
    // ------ convert dataSign Base64 to Hex ------
    const signatureHex = cryptoJs.enc.Hex.stringify(cryptoJs.enc.Base64.parse(data.dataSign))

    const pubKey = rs.KEYUTIL.getKey(data.publicKey, 'passwd')
    const sig = new rs.KJUR.crypto.Signature({ alg: 'SHA256withRSA' })
    sig.init(pubKey)
    sig.updateString(data.combinedParamsResponse)
    const isValid = sig.verify(signatureHex)

    // if (isValid) {
    return {
      message: isValid,
    }
    // } else {
    //   return {
    //     message: 'this signature is NOT valid ' + isValid,
    //   }
    // }
  }
}

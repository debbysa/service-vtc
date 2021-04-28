import crypto from 'crypto'

export class VerifyDataInfo {
  getDataInfo = (data: string) => {
    // const dataInfo =
    //   '1jS3CuoTdWKlV/xzDsTZWcckBl4AcOOiKMcJzqHwrw78D7bqa5NYHY64/3fmGC6SFxlptVyybjb/5qs2uu/UgIgEbwto+mA1IdWr+tQPEm/6A7rm2uCWZkp5v9P6Hmo1McrmdQB0NU78hCEOoX+rfaF9fyXM8zWSYRB22GJzqcjjy9Kg++i2nQ=='

    const TripleDESKey = 'ff39fc173e7ed3c35e01d139e6042e64'

    var md5Hash = crypto.createHash('md5').update(TripleDESKey)

    var keyMd5 = md5Hash.digest('hex').substring(0, 24)
    console.log(keyMd5)

    const decipher = crypto.createDecipheriv('des-ede3', keyMd5, '')
    let encrypted = decipher.update(data, 'base64', 'utf8')
    const result = (encrypted += decipher.final('utf8'))

    // console.log(JSON.parse(result))
    return JSON.parse(result)
  }
}

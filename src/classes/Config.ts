export class Config {
  domain_url: string
  private_key: string
  public_key: string

  get targetUrl() {
    return this.domain_url
  }

  get getPrivateKey() {
    return this.private_key
  }

  get getPublicKey() {
    return this.public_key
  }

  constructor(domain_url: string, private_key: string, public_key: string) {
    this.domain_url = domain_url
    this.private_key = private_key
    this.public_key = public_key
  }
}

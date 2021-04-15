export interface IGetCategory {
  partnerCode: string
  categoryID: string
  productID: string
  productAmount: string
  customerID: string
  partnerTransID: string
  partnerTransDate: string
  data: string
  dataSign: string
}

export interface IGetDataSign {
  privateKey: string
  combinedParams: string
}

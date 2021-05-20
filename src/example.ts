import { BuyCard } from './classes/BuyCard'
import { CheckBillInfo } from './classes/CheckBillInfo'
import { CheckPartnerOrder } from './classes/CheckPartnerOrder'
import { Config } from './classes/Config'
import { GetAllCategory } from './classes/GetAllCategory'
import { GetBalance } from './classes/GetBalance'
import { GetCardData } from './classes/GetCardData'
import { GetCardQuantity } from './classes/GetCardQuantity'
import { GetCategory } from './classes/GetCategory'
import { GetProduct } from './classes/GetProduct'
import { GetTelcoPromotions } from './classes/GetTelcoPromotions'
import { PayBill } from './classes/PayBill'
import { TopUpGame } from './classes/TopUpGame'
import { TopUpMobile } from './classes/TopUpMobile'

let config = new Config('', '', '', '')

let allCategoryService = new GetAllCategory(config)

// allCategoryService.getAllCategory({
//   partnerCode: '0912345331',
//   categoryID: '0',
//   productID: '',
//   productAmount: '',
//   customerID: '',
//   partnerTransID: '20210405090435641',
//   partnerTransDate: '20210405101235',
//   data: '',
//   dataSign: '',
// })

let categoryService = new GetCategory(config)

// categoryService.getCategory({
//   partnerCode: '0912345331',
//   categoryID: '161',
//   productID: '',
//   productAmount: '',
//   customerID: '',
//   partnerTransID: '20210405090435641',
//   partnerTransDate: '20210405090435',
//   data: '',
//   dataSign: '',
// })

let productService = new GetProduct(config)

// productService.getProduct({
//   partnerCode: '0912345331',
//   categoryID: '177',
//   productID: '238',
//   productAmount: '100000',
//   customerID: '',
//   partnerTransID: '84af774ca3d5-4a09-bd4d-a347ad5dd6b9',
//   partnerTransDate: '20210518141432',
//   data: '',
//   dataSign: '',
// })

let balanceService = new GetBalance(config)

// balanceService.getBalance({
//   partnerCode: '0912345331',
//   categoryID: '',
//   productID: '',
//   productAmount: '',
//   customerID: '',
//   partnerTransID: '20210415101454196',
//   partnerTransDate: '20210415101454',
//   data: '',
//   dataSign: '',
//   // dataSign: "EX+C4RyI2dU7AKO6WIPE3Bwg/JI6H3vAdgTrpokAt0tPMHDKhdoMC1jZffu0yckeQ+kuAkFW0TrLZ8L6/2lmC22JMDPOLXl60DpnNZT6kX1y7WOo3Aolf1uEaDiKPf0F6Xi8+8hn4vCxJ+OtUhKRATf1RFIjG+xiCQKNIbD+HgE="
// })

let topUpMobileService = new TopUpMobile(config)

// topUpMobileService.payTopUpMobile({
//   partnerCode: '0912345331',
//   categoryID: '177',
//   productID: '238',
//   productAmount: '100000',
//   customerID: '0912333212',
//   partnerTransID: 'F10B255BZG',
//   partnerTransDate: '20210507101235',
//   data: '',
//   dataSign: '',
// })

let checkPartnerOrderService = new CheckPartnerOrder(config)

// checkPartnerOrderService.checkPartnerOrder({
//   partnerCode: '0912345331',
//   categoryID: '',
//   productID: '',
//   productAmount: '',
//   customerID: '',
//   partnerTransID: 'F10B255BZC',
//   partnerTransDate: '20210507101235',
//   data: '',
//   dataSign: '',
// })

let checkBillInfoService = new CheckBillInfo(config)

// checkBillInfoService.checkBillInfo({
//   partnerCode: '0912345331',
//   categoryID: '130',
//   productID: '210',
//   productAmount: '',
//   customerID: '0912333212',
//   partnerTransID: 'F10B255BZC',
//   partnerTransDate: '20210507101235',
//   data: '',
//   dataSign: '',
// })

let payBillService = new PayBill(config)

// payBillService.payBill({
//   partnerCode: '0912345331',
//   categoryID: '7651',
//   productID: '10141',
//   productAmount: '250000',
//   customerID: 'ACS123456',
//   partnerTransID: '20210405101235',
//   partnerTransDate: '20210405101250',
//   data: '13579888',
//   dataSign: '',
//   // dataSign:
//   //   'gtMfgQSU1YP2O9/aiIG73wvgs8G77i/x3+lPiHfF8w5JaOmLxVOUwl7q4SyyE3J2EgPBUacpEoF54ZaNphPFIgHAc4FP/9nqlivPITvRy6aQMifTyG/BB5SJZ3rrCWNXJ7Swce6aKMjlc0bXiRAXzExjddb470Vua1xQks1fUX4=',
// })

let topUpGameService = new TopUpGame(config)

// topUpGameService.payTopUpGame({
//   partnerCode: '0912345331',
//   categoryID: '114',
//   productID: '91',
//   productAmount: '100000',
//   customerID: 'vtctest01',
//   partnerTransID: '202104GM12A',
//   partnerTransDate: '20210507100619',
//   data: '',
//   dataSign: '',
// })

let getCardDataService = new GetCardData(config)

// getCardDataService.getCardData({
//   partnerCode: '0912345331',
//   categoryID: '0',
//   productID: '0',
//   productAmount: '0',
//   customerID: 'vtctest01',
//   partnerTransID: '202104GM12E',
//   partnerTransDate: '20210507100619',
//   data: '407789',
//   dataSign: '',
// })

let getCardQuantityService = new GetCardQuantity(config)

// getCardQuantityService.getCardQuantityData({
//   partnerCode: '0912345331',
//   categoryID: '114',
//   productID: '',
//   productAmount: '',
//   customerID: '',
//   partnerTransID: '20210427130218857',
//   partnerTransDate: '20210427130218',
//   data: '',
//   dataSign: '',
// })

let buyCardService = new BuyCard(config)

// buyCardService.buyCard({
//   partnerCode: '0912345331',
//   categoryID: '67',
//   productID: '503',
//   productAmount: '200000',
//   customerID: 'vtctest02',
//   partnerTransID: '202104GM12K',
//   partnerTransDate: '20210507100619',
//   data: '1',
//   dataSign: '',
// })

let getTelcoPromotionsService = new GetTelcoPromotions(config)

// getTelcoPromotionsService.getTelcoPromotions({
//   partnerCode: '0912345331',
//   categoryID: '0',
//   productID: '0',
//   productAmount: '0',
//   customerID: '',
//   partnerTransID: '20210429101226644',
//   partnerTransDate: '20210429101226',
//   data: '',
//   dataSign:
//     'hg7N96JpZkXDR585NEWbCzU+VwXR0pfA7fvEcOw22yJON2PFM+H9KwZYJZFS+iLVRCIUuxs8tn7tc3bHNjT556CQ+inniSOV/jYhW/oCL7QoJTltGadxyd8rIwO+qDUN4WhE3Zw5+4GiVs5tmy0SuMNYOWkdjgxu8cJX0yqb3Cc=',
// })

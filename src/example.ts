import { CheckBillInfo } from './classes/CheckBillInfo'
import { CheckPartnerOrder } from './classes/CheckPartnerOrder'
import { Config } from './classes/Config'
import { GetAllCategory } from './classes/GetAllCategory'
import { GetBalance } from './classes/GetBalance'
import { GetCategory } from './classes/GetCategory'
import { GetProduct } from './classes/GetProduct'
import { PayBill } from './classes/PayBill'
import { TopUpGame } from './classes/TopUpGame'
import { TopUpMobile } from './classes/TopUpMobile'

let config = new Config(
  'http://117.103.207.81:8080',
  '-----BEGIN RSA PRIVATE KEY-----' +
    'MIICXwKBAQACgYCz1KYAjrTIEMcxwPxBYtff8eN0rOd8MbwxFTMtlgQKGJTpq4FE\n' +
    'OADieykfqA/DdWx20wnwUrzHQDO32F9fqk1628WK9nAQcqDOj4A+/+t5Jo66Sqtw\n' +
    '4kd2UE/NmXGN516uSeENA+pQzDRyO9JWAUc/4fC9/IQL5Kz4780/BbFfZwKBAwEA\n' +
    'AQKBgBFFls4N5soiZmdecDv9eNtu+ZgutSsGAdu6/AfgVTH9C2xoBwnc0STvjFMY\n' +
    'iq8Mu6ar/VPiNnRys6TwOLTRABDn0PnFuQfIZKg/cDEeU85WPA7vkjx+xethT9t/\n' +
    'PHMRFCbzXHF6jqd5gHDY/icZqjuTAePJzRgC26z5FMyxmm6JAoFA7pz2ZP2DMRhC\n' +
    'DtlZwfyQW5WhCitMes5Iw/k9mz5x7KgRKQANuUOph9uSp8bEpu/2bfEu5AKp5jqL\n' +
    '0p55s4cTWQKBQMDvK6Fgwhw9taMFWakFg/LqaOEfFFv8x/wXPxNKGJpBKAmpD8Na\n' +
    '/Blh3h3q/KtSlGtWQZxdHMZa2CC1vqercL8CgUAYv0S6sqRBmj93pMkvWk9qgDlE\n' +
    'gbsb3XskgBwIltBf+ApXkz7ZIRBbG8W5Ct9oZOjM/D+dvDz8uMO5o2AB45d5AoFA\n' +
    'H2fPRlmlv0scQgkg6y6GqAgYQmz4t3CSbSqrjcxF7PYmOkxW0IoC927C5UPXFVw/\n' +
    '5KkJzRYrFO68t7Zd7pUtqQKBQN6AkvyrvhqPvIPWndQ289y516hvc0B5Sel1qzz6\n' +
    'gdzUxXbJxMzzxhGOJdTBaMMq9PiAoSMIRoL34QXI+XDEnKM=\n' +
    '-----END RSA PRIVATE KEY-----',
  process.env.PUBLICKEY || ''
)

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
//   // dataSign:
//   //   'Nx96XSp8MFw118f37bfn2o5cn+1smfMbS0MNTAk9q2kYFXx6EeZgqEXLFdh9KbUZX+Cd6HBAOC1rRfpqfqVO3dj6I7bWOr+hBXG0DB27BlfavJj4RkHBWZ2xGb0ZpXOc+UkmTKXOmW4w42QefHISoZe+IaOVV3SV+NgGY7VWEG4=',
// })

let categoryService = new GetCategory(config)

// categoryService.getCategory({
//   partnerCode: '0912345331',
//   categoryID: '235',
//   productID: '',
//   productAmount: '',
//   customerID: '',
//   partnerTransID: '20210405090435641',
//   partnerTransDate: '20210405090435',
//   data: '',
//   dataSign: '',
//   // dataSign:
//   //   'at1l9ktAv4EQVuzoMj78KCwPg66jYCdLHEphcUFFD1E9R0IQCXYiVqdeyWS2Chv3275beLQzO13b7dCRkczucEOVQJeW09yoeXNup77QY08SH7gmo/vHbw9J/YFS5skocqa8nxrhRq3sZSqkXGsUtGtQupFeSR+nV0h9buaL+6A=',
// })

let productService = new GetProduct(config)

// productService.getProduct({
//   partnerCode: '0912345331',
//   categoryID: '114',
//   productID: '89',
//   productAmount: '',
//   customerID: '',
//   partnerTransID: '20210415101454468',
//   partnerTransDate: '20210415101454',
//   data: '',
//   dataSign: '',
//   // dataSign:
//   //   'eDrxAtajlVJk4PJlrLXAnp4n8ausi4J3sfFakFBdlik1IRrHFSAfeQLeGl4kKbBWg5+OhGyXgjRUEJAE/FQEZ676LDl7fDssDC+W/fAhly7t72oxd6hVBImwDm1Pf2CyQ5ontaTLpu631Jm/v4VzN76dRJwxQ7RAyGz+VbxE828=',
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
//   categoryID: '57',
//   productID: '25',
//   productAmount: '10000',
//   customerID: '0912333212',
//   partnerTransID: 'F10B255A',
//   partnerTransDate: '20210405101235',
//   data: '',
//   dataSign: '',
//   // dataSign:
//   //   'YnUC1PlRtgqpInFlqdIcyzjySYwNh/8y3gEHebPld59QuVYWPHxNN59FFA2MX1119KRsknjnk8lf7c4lv9HQX0+zhaPcGlDuhoga1YKeujbaCzEQmY9w8KQkBLoNLThDUmMEdo+CtLRFvGF7/kT6WFNu7Vt7P83PNCdSS8Ot3xw=',
// })

let checkPartnerOrderService = new CheckPartnerOrder(config)

// checkPartnerOrderService.checkPartnerOrder({
//   partnerCode: '0912345331',
//   categoryID: '',
//   productID: '',
//   productAmount: '',
//   customerID: '',
//   partnerTransID: 'F10B255A',
//   partnerTransDate: '20210405101249',
//   data: '',
//   dataSign: '',
//   // dataSign:
//   //   'EdGxGPrB9nI9Q5KJKWpGcUoCOdk+w+kswxy+XDBk0FtQGAhJqWDCeiHVFsLm5ICiwpibXdGHSKy0NC97ji9cahf7gcGY4GzzYU/bjIX8GiwMtZY8Jjm5tc8fJgCZKqsiwAVlW39gQVG+9itUzyS/MK5Rb3mHaOkt3tBdIIGaZno=',
// })

let checkBillInfoService = new CheckBillInfo(config)

// checkBillInfoService.checkBillInfo({
//   partnerCode: '0912345331',
//   categoryID: '7651',
//   productID: '0',
//   productAmount: '',
//   customerID: 'ACS123456',
//   partnerTransID: '20210405090435666',
//   partnerTransDate: '20210405101250',
//   data: '',
//   dataSign:
//     'GuaNhFlDtEBju+w6KwQiVRI173AT2BdPlP4DNCv2GI6id6ZXOcNc9xvcFgMW1F6mDWBy96notctP/W7XFSyabyrt4JQIghrYazcwVv4trcF0pTs7CxOExME2xfZ41ptLv6jfmrp679om1goHiNJww2b6Sh+nMGw9Tt6XKNUAgkU=',
// })

let payBillService = new PayBill(config)

// payBillService.payBill({
//   partnerCode: '0912345331',
//   categoryID: '7651',
//   productID: '10141',
//   productAmount: '250000',
//   customerID: 'ACS123456',
//   partnerTransID: '20210405090435666',
//   partnerTransDate: '20210405101250',
//   data: '13579888',
//   dataSign: '',
//   // dataSign:
//   //   'gtMfgQSU1YP2O9/aiIG73wvgs8G77i/x3+lPiHfF8w5JaOmLxVOUwl7q4SyyE3J2EgPBUacpEoF54ZaNphPFIgHAc4FP/9nqlivPITvRy6aQMifTyG/BB5SJZ3rrCWNXJ7Swce6aKMjlc0bXiRAXzExjddb470Vua1xQks1fUX4=',
// })

let topUpGameService = new TopUpGame(config)

topUpGameService.payTopUpGame({
  partnerCode: '0912345331',
  categoryID: '115',
  productID: '211',
  productAmount: '10000',
  customerID: 'vtctest01',
  partnerTransID: '20210419100619499',
  partnerTransDate: '20210419100619',
  data: '',
  dataSign: '',
  // dataSign:
  //   'VVhmoJxIUf6ftAFXK/BYfJ16hxpJPObeiTAa5K2O7hZGmEQFWrgFLxQWD6QF8RyRZU0AQGN48oWahG1kAB4WhOOZexuaagtFeI2FE8Ewq1qGZrabOQj+LnaCj5y+4bjCLFi5bSRPb/h0yOUylf1T0L521Z6A6e/r47RQ3HfdhYs=',
})

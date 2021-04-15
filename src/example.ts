import { Config } from './classes/Config'
import { GetAllCategory } from './classes/GetAllCategory'
import { GetBalance } from './classes/GetBalance'
import { GetCategory } from './classes/GetCategory'
import { GetProduct } from './classes/GetProduct'

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

balanceService.getBalance({
  partnerCode: '0912345331',
  categoryID: '',
  productID: '',
  productAmount: '',
  customerID: '',
  partnerTransID: '20210415101454196',
  partnerTransDate: '20210415101454',
  data: '',
  dataSign: '',
  // dataSign: "EX+C4RyI2dU7AKO6WIPE3Bwg/JI6H3vAdgTrpokAt0tPMHDKhdoMC1jZffu0yckeQ+kuAkFW0TrLZ8L6/2lmC22JMDPOLXl60DpnNZT6kX1y7WOo3Aolf1uEaDiKPf0F6Xi8+8hn4vCxJ+OtUhKRATf1RFIjG+xiCQKNIbD+HgE="
})

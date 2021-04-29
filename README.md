# Service VTC

You want to connect your API to VTC? Now, you can use this API service to handle it.

## Installation

Install `service-vtc`

```bash
npm install service-vtc
```

Import (in Typescript) or Require (in Javascript) the package in your project

```bash
// typescript
import {
    Config,
    ConfigDataInfo,
    ConfigDataSign,
    GetAllCategory,
    GetCategory,
    GetProduct,
    GetBalance,
    CheckBillInfo,
    GetTelcoPromotions,
    GetCardData,
    GetCardQuantity,
    CheckPartnerOrder,
    TopUpMobile,
    BuyCard,
    PayBill,
    TopUpGame,
    IGetCategory,
    IGetDataSign,
    IVerifyDataSign,
} from "service-vtc"

// javascript
const {
    Config,
  ConfigDataInfo,
  ConfigDataSign,
  GetAllCategory,
  GetCategory,
  GetProduct,
  GetBalance,
  CheckBillInfo,
  GetTelcoPromotions,
  GetCardData,
  GetCardQuantity,
  CheckPartnerOrder,
  TopUpMobile,
  BuyCard,
  PayBill,
  TopUpGame,
  IGetCategory,
  IGetDataSign,
  IVerifyDataSign,
} = require("service-vtc)
```

## Quick Start

This is example to implement service-vtc in Javascript:

```bash
const {
    Config,
  ConfigDataInfo,
  ConfigDataSign,
  GetAllCategory,
  GetCategory,
  GetProduct,
  GetBalance,
  CheckBillInfo,
  GetTelcoPromotions,
  GetCardData,
  GetCardQuantity,
  CheckPartnerOrder,
  TopUpMobile,
  BuyCard,
  PayBill,
  TopUpGame,
  IGetCategory,
  IGetDataSign,
  IVerifyDataSign,
} = require("service-vtc");

// config your domain_url, private_key, and public_key to access VTC
const config = new Config(
    "domain_url",
    "private_key",
    "public_key",
    "tripledes_key")

// using endpoint of balance
const balanceService = new GetBalance(config)

// get balance
balanceService.getBalance()
```

Note : private_key, public_key, and tripledes_key must be string

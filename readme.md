# Payment Gateway SDK

Welcome to the Payment Gateway SDK! This SDK provides seamless integration with our payment gateway, allowing you to accept payments, facilitate bill payments, perform identity verification, and manage payouts efficiently.

## Installation

To get started, simply include the SDK in your project. No need to instantiate the main class, as it's already done for you.

```bash
npm install payment-gateway-sdk
```

## Usage

### Note
secrets is your api key. Register on budpay to website https://app.budpay.com/ or https://merchant.budpay.com/ to get your api key.
### Accept Payment


```bash
import {acceptPayment} from 'payment-gateway-sdk'
```

#### s2sCardEncryptionV2

##### Example Data
```bash
{
    "data" :{
        "number": "5123450000000008",
        "expiryMonth": "10",
        "expiryYear": "22",
        "cvv" : "100",
        "pin" : "1234" // (optional - only required for verve/local cards)
    },
    "reference": "1253627873656276350"
}
```

```bash
acceptPayment.s2sCardEncryptionV2(secret, data);
```

#### s2sCardTransaction

##### Example Data
```bash
{ "amount": "100", "card" :"83fa6763bb31bae36a74f787ab814514aeede91fcdb311fd67609b414c5e5ea2751a47870c8717e71bcbc9c33287a3d6af9ffae8e2edbf2de1e2694384d699b020d31492637eef60d7a63f303798363a", "currency": "USD", "email": "test@email.com", "reference": "1253627873656276350" }
```

```bash
acceptPayment.s2sCardTransaction(secret, data);
```
#### s2sBankTransfer

##### Example Data
```bash
{ "email": "test@test.com", "amount": "100", "currency" :"NGN", "reference": "1253627873656276350", "name": "Business Name / Firstname lastname" }
```

```bash
acceptPayment.s2sBankTransfer(secret, data);
```

#### s2sCardTransactionV2
```bash
acceptPayment.s2sCardTransactionV2(secret, data);
```
#### s2sVerifyTransaction
```bash
acceptPayment.s2sVerifyTransaction(secret, reference);
```
### Bill Payment
#### airtime
```bash
billPayment.airtime(secret);
```
#### getInternet
```bash
billPayment.getInternet(secret);
```
#### getTV
```bash
billPayment.getTV(secret);
```
#### getElectricity
```bash
billPayment.getElectricity(secret);
```
#### getInternetProviderPlan
```bash
billPayment.getInternetProviderPlan(secret);
```
#### getTVPackages
```bash
billPayment.getTVPackages(secret);
```
#### airtimeTopup
```bash
billPayment.airtimeTopup(secret, data);
```
#### tvValidate
```bash
billPayment.tvValidate(secret, data);
```
#### electricityValidate
```bash
billPayment.electricityValidate(secret, data);
```
#### tvSubscription
```bash
billPayment.tvSubscription(secret, data);
```
#### electricityRecharge
```bash
billPayment.electricityRecharge(secret, data);
```
#### internetDataPurchase
```bash
billPayment.internetDataPurchase(secret, data);
```

### Identity Verification
#### verifyAccountName

```bash
identityVerification.verifyAccountName(secret, data);
```
#### bvnVerification

```bash
identityVerification.bvnVerification(secret, data);
```
### Payout

#### bankList

```bash
payout.bankList(secret);
```
#### bankListKES

```bash
payout.bankListKES(secret);
```
#### bankListGHS
```bash
payout.bankListGHS(secret);
```
#### bankNameVerification
```bash
payout.bankNameVerification(secretsecret, data);
```
#### singlePayout
```bash
payout.singlePayout(secret, data);
```
#### bulkPayout
```bash
payout.bulkPayout(secret, data);
```
#### verifyPayout
```bash
payout.verifyPayout(secret, data);
```
#### listPayout
```bash
payout.listPayout(secret, data);
```
#### feePayout
```bash
payout.feePayout(secret, data);
```
#### walletBalance
```bash
payout.walletBalance(secret, currency);
```
#### walletTransactions
```bash
payout.walletTransactions(secret, currency);
```
# Payment Gateway SDK

Welcome to the Payment Gateway SDK! This SDK provides seamless integration with our payment gateway, allowing you to accept payments, facilitate bill payments, perform identity verification, and manage payouts efficiently.

## Installation

To get started, simply include the SDK in your project. No need to instantiate the main class, as it's already done for you.

```bash
npm install payment-gateway-sdk
```

## Usage

### Accept Payment
```bash
import {acceptPayment} from 'payment-gateway-sdk'
```
#### s2sCardTransaction
```bash
acceptPayment.s2sCardTransaction(secret, data);
```
#### s2sBankTransfer
```bash
acceptPayment.s2sBankTransfer(secret, data);
```

#### s2sCardEncryptionV2
```bash
acceptPayment.s2sCardEncryptionV2(secret, data);
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
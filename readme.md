# Payment Gateway SDK

Welcome to the Payment Gateway SDK! This SDK provides seamless integration with BudPay payment gateway, allowing you to accept payments, facilitate bill payments, perform identity verification, and manage payouts efficiently.

## Installation

To get started, simply include the SDK in your project. No need to instantiate the main class, as it's already done for you.

```bash
npm install budpay-sdk
```

## Usage

### Note
secrets is your api key. Register on budpay to website  [here](https://app.budpay.com/) or [here for older version](https://merchant.budpay.com/) to get your api key.


### Accept Payment

```bash
import {acceptPayment} from 'bupday-sdk'
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
{ 
    "amount": "100", 
    "card": "83fa6763bb31bae36a74f787ab814514aeede91fcdb311fd67609b414c5e5ea2751a47870c8717e71bcbc9c33287a3d6af9ffae8e2edbf2de1e2694384d699b020d31492637eef60d7a63f303798363a", 
    "currency": "USD", 
    "email": "test@email.com", 
    "reference": "1253627873656276350" 
}
```

```bash
acceptPayment.s2sCardTransaction(secret, data);
```
#### s2sBankTransfer

##### Example Data
```bash
{ 
    "email": "test@test.com", 
    "amount": "100", 
    "currency" :"NGN", 
    "reference": "1253627873656276350", 
    "name": "Business Name / Firstname lastname" 
}
```

```bash
acceptPayment.s2sBankTransfer(secret, data);
```

#### s2sCardTransactionV2

##### Example Data
```bash
{ 
    "amount": "100", 
    "card": "83fa6763bb31bae36a74f787ab814514aeede91fcdb311fd67609b414c5e5ea2751a47870c8717e71bcbc9c33287a3d6af9ffae8e2edbf2de1e2694384d699b020d31492637eef60d7a63f303798363a", 
    "currency": "USD", 
    "email": "test@email.com", 
    "reference": "1253627873656276350" 
}
```

```bash
acceptPayment.s2sCardTransactionV2(secret, data);
```
#### s2sVerifyTransaction
reference: The transaction reference used to intiate the transaction 

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
billPayment.getInternetProviderPlan(secret, provider);
```
#### getTVPackages
```bash
billPayment.getTVPackages(secret, provider);
```
#### airtimeTopup

##### Example Data

```bash
{ "provider": "MTN",
    "number": "07036218209",
    "amount": "100",
    "reference": "2459392959593939"
}
```
```bash
billPayment.airtimeTopup(secret, data);
```
#### tvValidate

##### Example Data
```bash
{
    "provider": "GOTV",
    "number": "2019505346"
}
```
```bash
billPayment.tvValidate(secret, data);
```
#### electricityValidate

##### Example Data
```bash
{
    "provider": "IBEDC",
    "type": "prepaid",
    "number": "1111111111111"
}
```
```bash
billPayment.electricityValidate(secret, data);
```
#### tvSubscription

##### Example Data
```bash
{
    "provider": "GOTV",
    "number": "2019505346",
    "code": "gotv-max",
    "reference": "20220511035554758"
}
```
```bash
billPayment.tvSubscription(secret, data);
```
#### electricityRecharge

##### Example Data
```bash
{
    "provider": "IKEDC",
    "number": "1111111111111",
    "type": "prepaid",
    "amount": 1000,
    "reference": "2022051105275457530"
}
```
```bash
billPayment.electricityRecharge(secret, data);
```
#### internetDataPurchase

##### Example Data

```bash
{ "provider": "MTN",
    "number": "07036218209",
    "plan_id": "238",
    "reference": "2459392959593939"
}
```
```bash
billPayment.internetDataPurchase(secret, data);
```

### Identity Verification
#### verifyAccountName

##### Example Data
```bash
{
    "bank_code": "000013",
    "account_number": "0050883605"
}
```
```bash
identityVerification.verifyAccountName(secret, data);
```
#### bvnVerification

##### Example Data
```bash
{
    "bvn": "00000000000",
    "first_name": "Tolulope",
    "middle_name": "Samuel",
    "last_name": "Segun",
    "phone_number": "08011111111",
    "dob": "1972-12-03",
    "gender": "Male",
    "reference": "20220540300003938",
    "callback_url": "http://your_webhook_url"
}
```

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

##### Example Data
```bash
{
    "bank_code": "000013",
    "account_number": "0050883605",
    "currency": "NGN"
}
```
```bash
payout.bankNameVerification(secretsecret, data);
```
#### singlePayout

##### Example Data
```bash
{
    "currency": "NGN",
    "amount": "100",
    "bank_code": "000013",
    "bank_name": "GUARANTY TRUST BANK",
    "account_number": "0050883605",
    "narration": "Test transfer"
}

// For KES

{
    "account_number": "0719593074",
    "amount": "10",
    "bank_code": "0016",
    "bank_name": "Citi Bank",
    "currency": "KES",
    "narration": "Bank Prod test payment",
    "paymentMode": "momo"
}

// For GHS
{
    "account_number": "0270073750",
    "amount": "10",
    "bank_code": "ABS",
    "bank_name": "ABSA BANK",
    "currency": "GHS",
    "narration": "Bank Transfer To Ghana"
}
```

```bash
payout.singlePayout(secret, data);
```
#### bulkPayout

##### Example Data
```bash
{
    "currency": "NGN",
    "transfers": [
        {
            "amount": "200",
            "bank_code": "000013",
            "bank_name": "GUARANTY TRUST BANK",
            "account_number": "0050883605",
            "narration": "January Salary"
        },
        {
            "amount": "100",
            "bank_code": "000013",
            "bank_name": "GUARANTY TRUST BANK",
            "account_number": "0050883605",
            "narration": "February  Salary"
        },
        {
            "amount": "100",
            "bank_code": "000013",
            "bank_name": "GUARANTY TRUST BANK",
            "account_number": "0050883605",
            "narration": "March  Salary"
        }
    ]
}
```

```bash
payout.bulkPayout(secret, data);
```
#### verifyPayout
```bash
payout.verifyPayout(secret, reference);
```
#### listPayout
```bash
payout.listPayout(secret, data);
```
#### feePayout

##### Example Data
```bash
{
    "currency": "NGN",
    "amount": "100"
}
```

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

# Open Source Documentation
For more detailed documentation, contribution guidelines, and issues, please visit our [GitHub repository](https://github.com/maoltech/budpay-sdk).

# NPM Package Information
npm package
Version: 1.0.0
License: MIT


Ensure that you replace any placeholder information such as `"secret"` and `"data"` with the actual variables or parameters required for your methods.


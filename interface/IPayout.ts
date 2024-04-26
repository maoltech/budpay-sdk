interface IAccountNameVerify {
    bank_code: string,
    account_number: string,
    currency: string
}

interface ISinglePayout {
    amount: string,
    bank_name: string,
    bank_code: string,
    currency: string,
    narration: string,
    account_number: string
}

export {
    IAccountNameVerify,
    ISinglePayout
}
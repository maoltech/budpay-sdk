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
    account_number: string,
    paymentMode?: string
}

interface ITransfers{
    amount: string,
    bank_code: string,
    bank_name: string,
    account_number: string,
    narration?: string
}
interface IBulkPayout {
    currency: string,
    transfer: ITransfers[]
}

interface IFeePayout {
    currency: string,
    amount: string
}

export {
    IAccountNameVerify,
    ISinglePayout,
    IBulkPayout,
    IFeePayout
}
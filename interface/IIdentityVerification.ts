
interface IVerifyAccountName {
    bank_code: string,
    account_number: string
}

interface IBVNVerification {
    bvn: string,
    callback_url: string,
    first_name?: string,
    middle_name?: string,
    last_name?: string,
    phone_number?: string,
    dob?: string,
    gender?: string
}

export {
    IVerifyAccountName,
    IBVNVerification
}
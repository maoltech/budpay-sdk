

interface IAirtimeTopup {
    provider: string,
    number: string,
    amount: string
}

interface IInternetDataPurchase {
    provider: string,
    number: string,
    plan_id: string
}

interface ITVSubscription {
    provider: string,
    number: string,
    code?: string
}

interface IElectricityRecharge {
    provider: string,
    number: string,
    type: string,
    amount?: string
}

export {
    IAirtimeTopup,
    IInternetDataPurchase,
    ITVSubscription,
    IElectricityRecharge
};

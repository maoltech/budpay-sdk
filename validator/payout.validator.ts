import {IAccountNameVerify, ISinglePayout, IBulkPayout, IFeePayout} from "../interface/IPayout"
import Joi from "joi"

class PayoutValidator {

    public accountNameVerify = (data: IAccountNameVerify)=> {
        const accountNameVerifySchema = Joi.object({
            bank_code: Joi.string().required(),
            account_number: Joi.string().required(),
            currency: Joi.string().required()
        });

        return accountNameVerifySchema.validate(data)

    }

    public singlePayout = (data: ISinglePayout)=> {
        const singlePayoutSchema = Joi.object({
            bank_code: Joi.string().required(),
            bank_name: Joi.string().required(),
            amount: Joi.string().required(),
            account_number: Joi.string().required(),
            currency: Joi.string().required(),
            narration: Joi.string(),
            paymentMode: Joi.string(),
        });

        return singlePayoutSchema.validate(data)

    }

    public feePayout = (data: IFeePayout)=> {
        const feePayoutSchema = Joi.object({
            amount: Joi.string().required(),
            currency: Joi.string().required(),
        })
        return feePayoutSchema.validate(data)

    }

    public  bulkPayout = (data: IBulkPayout) => {
        const transfersSchema = Joi.object({
            amount: Joi.string().required(),
            bank_code: Joi.string().required(),
            bank_name: Joi.string().required(),
            account_number: Joi.string().required(),
            narration: Joi.string()
        });
        
        const bulkPayoutSchema = Joi.object({
            currency: Joi.string().required(),
            transfers: Joi.array().items(transfersSchema).min(1).required()
        });

        return bulkPayoutSchema.validate(data)
    }
}

export const payoutValidator =  new PayoutValidator();
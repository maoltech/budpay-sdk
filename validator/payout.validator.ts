import {IAccountNameVerify, ISinglePayout} from "../interface/IPayout"
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
            narration: Joi.string()
        });

        return singlePayoutSchema.validate(data)

    }
}

export const payoutValidator =  new PayoutValidator();
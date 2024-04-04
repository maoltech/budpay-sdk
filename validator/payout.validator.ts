import {IAccountNameVerify} from "../interface/IPayout"
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
}

export const payoutValidator =  new PayoutValidator();
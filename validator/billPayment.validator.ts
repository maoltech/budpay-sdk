
import Joi, { number } from "joi"
import { IAirtimeTopup, IElectricityRecharge, IInternetDataPurchase, ITVSubscription } from "../interface/IBillPament"

class BillPaymentValidator {
   
    public airtimeTopup = (data: IAirtimeTopup) => {

        const airtimeTopupSchema = Joi.object({
            provider: Joi.string().required(),
            number: Joi.string().required(),
            amount: Joi.string().required()
        })

        return airtimeTopupSchema.validate(data);
    }

    public internetDataPurchase = (data: IInternetDataPurchase) => {

        const airtimeTopupSchema = Joi.object({
            provider: Joi.string().required(),
            number: Joi.string().required(),
            plan_id: Joi.string().required()
        })

        return airtimeTopupSchema.validate(data);
    }

    public tvSubscription = (data: ITVSubscription) => {
        
        const tvSubscriptionSchema = Joi.object({
            provider: Joi.string().required(),
            number: Joi.string().required(),
            code: Joi.string()
        })

        return tvSubscriptionSchema.validate(data)
    }

    public electricityRecharge = (data: IElectricityRecharge) => {
        
        const tvSubscriptionSchema = Joi.object({
            provider: Joi.string().required(),
            number: Joi.string().required(),
            type: Joi.string().required(),
            amount: Joi.string()
        })

        return tvSubscriptionSchema.validate(data)
    }

}

export const billPaymentValidator = new BillPaymentValidator();


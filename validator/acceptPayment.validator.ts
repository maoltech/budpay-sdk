import Joi from "joi";
import { Is2sBankTransferPayload, Is2sCardEncryptionPayload, Is2sCardPaymentPayload } from "../interface/IAcceptPayment";



class AcceptPaymentValidator {

    public s2sCardPaymentPayload = (data: Is2sCardPaymentPayload) => {

        const s2sCardPaymentSchema = Joi.object({
            amount: Joi.string().required(),
            card: Joi.string().required(),
            callback: Joi.string().uri().required(),
            currency: Joi.string().required(),
            email: Joi.string().email().required(),
            pin: Joi.string().required(),
        });

        return s2sCardPaymentSchema.validate(data)
    }

    public s2sBankTransferPayload = (data: Is2sBankTransferPayload) => {

        const s2sCardPaymentSchema = Joi.object({
            amount: Joi.string().required(),
            name: Joi.string().required(),
            currency: Joi.string().required(),
            email: Joi.string().email().required()
        });

        return s2sCardPaymentSchema.validate(data)
    }

    public s2sCardEncryptionPayload = (data: Is2sCardEncryptionPayload) => {

        const s2sCardEncryptionSchema = Joi.object({
            number: Joi.string().creditCard().required(),
            expiryMonth: Joi.string().regex(/^(0[1-9]|1[0-2])$/).required(),
            expiryYear: Joi.string().regex(/^\d{2}$/).required(),
            cvv: Joi.string().length(3).required(),
            pin: Joi.string().optional()
        });

        return s2sCardEncryptionSchema.validate(data);
    }

}

export const acceptPaymentValidator = new AcceptPaymentValidator();
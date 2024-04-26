import Joi from "joi";
import { IBVNVerification, IVerifyAccountName } from "../interface/IIdentityVerification";

class IdentityVerificationValidator {

    public verifyAccountName = (data: IVerifyAccountName) => {
        const verifyAccountNameSchema = Joi.object({
            account_name: Joi.string().required(),
            bank_code: Joi.string().required()
        });

        return verifyAccountNameSchema.validate(data);
    }

    public bvnVerification = (data: IBVNVerification) => {
        const verifyAccountNameSchema = Joi.object({
            bvn: Joi.string().required(),
            callback_url: Joi.string().uri().required(),
            first_name: Joi.string(),
            middle_name: Joi.string(),
            last_name: Joi.string(),
            phone_number: Joi.string(),
            dob: Joi.string(),
        });

        return verifyAccountNameSchema.validate(data);
    }
}

export const identityVerificationValidator = new IdentityVerificationValidator();
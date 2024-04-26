import axios from "axios";
import { IBVNVerification, IVerifyAccountName } from "../interface/IIdentityVerification";
import { BadRequest } from "../utils/responseMethod";
import { utils } from "../utils/utils";
import { identityVerificationValidator } from "../validator/indentityVerification.validator";
import { baseUrl } from "../utils/constants";

class IdentityVerification {

    public verifyAccountName = async(secret: string, data: IVerifyAccountName) => {
        try {
            const {error} = identityVerificationValidator.verifyAccountName(data)
            if(error){
                throw BadRequest(error.message)
            }

            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json"
            }

            const response = await axios.post(
                `${baseUrl}/account_name_verify`,
                data,
                {headers}
            )
    
            return response.data

        } catch (error) {
            throw error
        }
    }

    public bvnVerfication = async(secret: string, data:IBVNVerification) => {
        try {
            const {error} = identityVerificationValidator.bvnVerification(data)
            if(error){
                throw BadRequest(error.message)
            }

            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json"
            }

            const reference = utils.referenceGenerator()
            const payload = {
               ...data,
                reference
            }

            const response = await axios.post(
                `${baseUrl}/bvn/verify`,
                payload,
                {headers}
            )

            return response.data
        }catch(error) {
            throw error
        }
    }


}

export const identityVerification = new IdentityVerification();
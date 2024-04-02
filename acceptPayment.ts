import Joi from "joi";
import { acceptPaymentValidator } from "./validator/acceptPayment.validator";
import { BadRequest } from "./utils/responseMethod";
import { Is2sCardEncryptionPayload, Is2sCardPaymentPayload } from "./interface/IAcceptPayment";
import { utils } from "./utils/utils";
import { s2sBaseUrl } from "./utils/constants";
import axios from "axios"

class AcceptPayment {

    public s2sCardEncryption = async(secret: string, data: Is2sCardEncryptionPayload) => {

        try {
            
            const {error} = acceptPaymentValidator.s2sCardEncryptionPayload(data)
            if(error){
                BadRequest(error.message)
            }
    
            const reference = utils.referenceGenerator()
            const payload = {
                data,
                reference
            }
            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json"
            }
            const response = await axios.post(
                `${s2sBaseUrl}/test/encryption`,
                payload,
                {headers}
            )
    
            return response.data

        } catch (error) {
            throw error
        }

    }

    //transaction/initialize
    public s2sCardTransaction = async(secret: string, data:Is2sCardPaymentPayload) => {

        const {error} = acceptPaymentValidator.s2sCardPaymentPayload(data)
        if(error){
            BadRequest(error.message)
        }

        const reference = utils.referenceGenerator()
        const payload = {
            ...data,
            reference
        }
        const headers = {
            Authorization: `Bearer ${secret}`,
            "content-type": "application/json"
        }

        try {
            const response = await axios.post(
                `${s2sBaseUrl}/transaction/initialize`,
                payload,
                {headers}
            )
            return response.data
            
        } catch (error) {
            throw error
        }
    }


}

export const acceptPayment = new AcceptPayment();
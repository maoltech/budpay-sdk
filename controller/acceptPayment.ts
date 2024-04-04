import Joi from "joi";
import { acceptPaymentValidator } from "../validator/acceptPayment.validator";
import { BadRequest } from "../utils/responseMethod";
import { Is2sBankTransferPayload, Is2sCardEncryptionPayload, Is2sCardPaymentPayload } from "../interface/IAcceptPayment";
import { utils } from "../utils/utils";
import { s2sBaseUrl, s2sBaseUrlV2 } from "../utils/constants";
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

    public s2sBankTransfer = async(secret: string, data:Is2sBankTransferPayload) => {

        const {error} = acceptPaymentValidator.s2sBankTransferPayload(data)
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
                `${s2sBaseUrl}/banktransfer/initialize`,
                payload,
                {headers}
            )
            return response.data
            
        } catch (error) {
            throw error
        }
    }

    public s2sCardEncryptionV2 = async(secret: string, data: Is2sCardEncryptionPayload) => {

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
                `${s2sBaseUrlV2}/test/encryption`,
                payload,
                {headers}
            )
    
            return response.data

        } catch (error) {
            throw error
        }

    }

    //transaction/initialize
    public s2sCardTransactionV2 = async(secret: string, data:Is2sCardPaymentPayload) => {

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
                `${s2sBaseUrlV2}/transaction/initialize`,
                payload,
                {headers}
            )
            return response.data
            
        } catch (error) {
            throw error
        }
    }

    public s2sVerifyTransaction = async(secret: string, reference:string) => {

        const headers = {
            Authorization: `Bearer ${secret}`
        }

        try {
            const response = await axios.get(
                `${s2sBaseUrlV2}/transaction/verify/${reference}`,
                {headers}
            )
            return response.data
            
        } catch (error) {
            throw error
        }
    }

}

export const acceptPayment = new AcceptPayment();
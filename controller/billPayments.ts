import axios from "axios"
import { baseUrl } from "../utils/constants"
import { IAirtimeTopup, IElectricityRecharge, IInternetDataPurchase, ITVSubscription } from "../interface/IBillPament"
import { billPaymentValidator } from "../validator/billPayment.validator"
import { BadRequest } from "../utils/responseMethod"
import { utils } from "../utils/utils"


class BillPayment {

    public airtime = async (secret: string) => {
        try{
            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json"
            }
            const response = await axios.get(
                `${baseUrl}/airtime`,
                {headers}
            )
    
            return response.data
        }catch(error){
            throw error
        }
    }

    public getInternet = async (secret: string) => {
        try{
            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json"
            }
            const response = await axios.get(
                `${baseUrl}/internet`,
                {headers}
            )
    
            return response.data
        }catch(error){
            throw error
        }
    }

    public getTV = async (secret: string) => {
        try{
            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json"
            }
            const response = await axios.get(
                `${baseUrl}/tv`,
                {headers}
            )
    
            return response.data
        }catch(error){
            throw error
        }
    }

    public getElectricity = async (secret: string) => {
        try{
            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json"
            }
            const response = await axios.get(
                `${baseUrl}/electricity`,
                {headers}
            )
    
            return response.data
        }catch(error){
            throw error
        }
    }

    public getInternetProviderPlan = async (secret: string, provider: string) => {
        try{
            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json"
            }
            const response = await axios.get(
                `${baseUrl}/internet/plans/${provider}`,
                {headers}
            )
    
            return response.data
        }catch(error){
            throw error
        }
    }

    public getTVPackages = async (secret: string, provider: string) => {
        try{
            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json"
            }
            const response = await axios.get(
                `${baseUrl}/tv/packages/${provider}`,
                {headers}
            )
    
            return response.data
        }catch(error){
            throw error
        }
    }

    public airtimeTopup = async (secret: string, data: IAirtimeTopup) => {
        try {
            const {error} = billPaymentValidator.airtimeTopup(data)
            if(error){
                throw BadRequest(error.message)
            }

            const encryption = utils.encryptData(secret, data)
            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json",
                "Encryption": encryption
            }

            const reference = utils.referenceGenerator()
            const payload = {
               ...data,
                reference
            }
            const response = await axios.post(
                `${baseUrl}/payout_fee`,
                payload,
                {headers}
            )
    
            return response.data
        } catch (error) {
            throw error
        }
    }

    public tvValidate = async (secret: string, data: ITVSubscription) => {
        try {
            const {error} = billPaymentValidator.tvSubscription(data)
            if(error){
                throw BadRequest(error.message)
            }

            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json"
            }

            const response = await axios.post(
                `${baseUrl}/tv/validate`,
                data,
                {headers}
            )
    
            return response.data
        } catch (error) {
            throw error
        }
    }

    public electricityValidate = async (secret: string, data: IElectricityRecharge) => {
        try {
            const {error} = billPaymentValidator.electricityRecharge(data)
            if(error){
                throw BadRequest(error.message)
            }

            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json"
            }

            const response = await axios.post(
                `${baseUrl}/electricity/validate`,
                data,
                {headers}
            )
    
            return response.data
        } catch (error) {
            throw error
        }
    }

    public tvSubcription = async (secret: string, data: ITVSubscription) => {
        try {
            const {error} = billPaymentValidator.tvSubscription(data)
            if(error){
                throw BadRequest(error.message)
            }

            const encryption = utils.encryptData(secret, data)
            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json",
                "Encryption": encryption
            }

            const reference = utils.referenceGenerator()
            const payload = {
               ...data,
                reference
            }
            const response = await axios.post(
                `${baseUrl}/tv/pay`,
                payload,
                {headers}
            )
    
            return response.data
        } catch (error) {
            throw error
        }
    }

    public electricityRecharge = async (secret: string, data: IElectricityRecharge) => {
        try {
            const {error} = billPaymentValidator.electricityRecharge(data)
            if(error){
                throw BadRequest(error.message)
            }
            const encryption = utils.encryptData(secret, data)
            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json",
                "Encryption": encryption
            }

            const reference = utils.referenceGenerator()
            const payload = {
               ...data,
                reference
            }
            const response = await axios.post(
                `${baseUrl}/electricity/recharge`,
                payload,
                {headers}
            )
    
            return response.data
        } catch (error) {
            throw error
        }
    }

    public internetDataPurchase = async (secret: string, data: IInternetDataPurchase) => {
        try {
            const {error} = billPaymentValidator.internetDataPurchase(data)
            if(error){
                throw BadRequest(error.message)
            }
            const encryption =  utils.encryptData(secret, data)
            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json",
                "Encryption": encryption
            }

            const reference = utils.referenceGenerator()
            const payload = {
               ...data,
                reference
            }

            const response = await axios.post(
                `${baseUrl}/payout_fee`,
                payload,
                {headers}
            )
    
            return response.data
        } catch (error) {
            throw error
        }
    }
}

export const billPayment = new BillPayment();
import axios from "axios"
import {baseUrl} from "../utils/constants"
import {IAccountNameVerify, ISinglePayout} from "../interface/IPayout"
import {payoutValidator} from "../validator/payout.validator"
import { BadRequest } from "../utils/responseMethod";
import { utils } from "../utils/utils";

class Payout {

    public bankList = async(secret: string) =>{
        const headers = {
            Authorization: `Bearer ${secret}`
        }

        try {
            const response = await axios.get(
                `${baseUrl}/bank_list`,
                {headers}
            )
            return response.data
            
        } catch (error) {
            throw error
        } 
    }
    
    public bankListKES = async(secret: string) =>{
        const headers = {
            Authorization: `Bearer ${secret}`
        }

        try {
            const response = await axios.get(
                `${baseUrl}/bank_list/KES`,
                {headers}
            )
            return response.data
            
        } catch (error) {
            throw error
        } 
    }
    
    public bankListGHS = async(secret: string) =>{
        const headers = {
            Authorization: `Bearer ${secret}`
        }

        try {
            const response = await axios.get(
                `${baseUrl}/bank_list/GHS`,
                {headers}
            )
            return response.data
            
        } catch (error) {
            throw error
        } 
    }

    public bankNameVerification = async(secret: string, data: IAccountNameVerify) => {

        try {
            
            const {error} = payoutValidator.accountNameVerify(data)
            if(error){
                throw BadRequest(error.message)
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
                `${baseUrl}/account_name_verify`,
                payload,
                {headers}
            )
    
            return response.data

        } catch (error) {
            throw error
        }

    }

    public singlePayout = (secret: string, data: ISinglePayout) => {
        const {error} = payoutValidator.accountNameVerify(data)
            if(error){
                throw BadRequest(error.message)
            }
    }

}

export const payout = new Payout();
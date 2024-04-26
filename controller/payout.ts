import axios from "axios"
import {baseUrl} from "../utils/constants"
import {IAccountNameVerify, ISinglePayout, IBulkPayout, IFeePayout} from "../interface/IPayout"
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

    public singlePayout = async(secret: string, data: ISinglePayout) => {

        try{
            const {error} = payoutValidator.singlePayout(data)
            if(error){
                throw BadRequest(error.message)
            }

            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json"
            }
            const response = await axios.post(
                `${baseUrl}/bank_transfer`,
                data,
                {headers}
            )
    
            return response.data
        }catch(error){
            throw error
        }
    }

    public verifyPayout = async(secret: string, reference: string) => {

        try{
            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json"
            }
            const response = await axios.get(
                `${baseUrl}/payout/${reference}`,
                {headers}
            )
    
            return response.data
        }catch(error){
            throw error
        }
    }

    public listPayout = async(secret: string, currency?: string) => {

        try{

            let url = `${baseUrl}/payout/list_transfers`
            if(currency){
                url = `${baseUrl}/payout/list_transfers?currency=${currency}`
            }
            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json"
            }
            const response = await axios.get(
                url,
                {headers}
            )
    
            return response.data

        }catch(error){
            throw error
        }
    }

    public feePayout = async(secret: string, data: IFeePayout) => {
        try{
            const {error} = payoutValidator.feePayout(data)
            if(error){
                throw BadRequest(error.message)
            }

            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json"
            }
            const response = await axios.post(
                `${baseUrl}/payout_fee`,
                data,
                {headers}
            )
    
            return response.data
        }catch(error){
            throw error
        }
    }
 
    public walletBalance = async(secret: string, currency: string) => {

        try{
            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json"
            }
            const response = await axios.get(
                `${baseUrl}/wallet_balance/${currency}`,
                {headers}
            )
    
            return response.data
        }catch(error){
            throw error
        }
    }
 
    public walletTransactions = async(secret: string, currency: string) => {

        try{
            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json"
            }
            const response = await axios.get(
                `${baseUrl}/wallet_transactions/${currency}`,
                {headers}
            )
    
            return response.data
        }catch(error){
            throw error
        }
    }


}

export const payout = new Payout();
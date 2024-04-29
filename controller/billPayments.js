"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../utils/constants");
const billPayment_validator_1 = require("../validator/billPayment.validator");
const responseMethod_1 = require("../utils/responseMethod");
const utils_1 = require("../utils/utils");
class BillPayment {
    constructor() {
        this.airtime = (secret) => __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json"
                };
                const response = yield axios_1.default.get(`${constants_1.baseUrl}/airtime`, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.getInternet = (secret) => __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json"
                };
                const response = yield axios_1.default.get(`${constants_1.baseUrl}/internet`, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.getTV = (secret) => __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json"
                };
                const response = yield axios_1.default.get(`${constants_1.baseUrl}/tv`, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.getElectricity = (secret) => __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json"
                };
                const response = yield axios_1.default.get(`${constants_1.baseUrl}/electricity`, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.getInternetProviderPlan = (secret, provider) => __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json"
                };
                const response = yield axios_1.default.get(`${constants_1.baseUrl}/internet/plans/${provider}`, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.getTVPackages = (secret, provider) => __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json"
                };
                const response = yield axios_1.default.get(`${constants_1.baseUrl}/tv/packages/${provider}`, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.airtimeTopup = (secret, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = billPayment_validator_1.billPaymentValidator.airtimeTopup(data);
                if (error) {
                    throw (0, responseMethod_1.BadRequest)(error.message);
                }
                const encryption = utils_1.utils.encryptData(secret, data);
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json",
                    "Encryption": encryption
                };
                const reference = utils_1.utils.referenceGenerator();
                const payload = Object.assign(Object.assign({}, data), { reference });
                const response = yield axios_1.default.post(`${constants_1.baseUrl}/payout_fee`, payload, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.tvValidate = (secret, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = billPayment_validator_1.billPaymentValidator.tvSubscription(data);
                if (error) {
                    throw (0, responseMethod_1.BadRequest)(error.message);
                }
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json"
                };
                const response = yield axios_1.default.post(`${constants_1.baseUrl}/tv/validate`, data, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.electricityValidate = (secret, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = billPayment_validator_1.billPaymentValidator.electricityRecharge(data);
                if (error) {
                    throw (0, responseMethod_1.BadRequest)(error.message);
                }
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json"
                };
                const response = yield axios_1.default.post(`${constants_1.baseUrl}/electricity/validate`, data, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.tvSubcription = (secret, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = billPayment_validator_1.billPaymentValidator.tvSubscription(data);
                if (error) {
                    throw (0, responseMethod_1.BadRequest)(error.message);
                }
                const encryption = utils_1.utils.encryptData(secret, data);
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json",
                    "Encryption": encryption
                };
                const reference = utils_1.utils.referenceGenerator();
                const payload = Object.assign(Object.assign({}, data), { reference });
                const response = yield axios_1.default.post(`${constants_1.baseUrl}/tv/pay`, payload, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.electricityRecharge = (secret, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = billPayment_validator_1.billPaymentValidator.electricityRecharge(data);
                if (error) {
                    throw (0, responseMethod_1.BadRequest)(error.message);
                }
                const encryption = utils_1.utils.encryptData(secret, data);
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json",
                    "Encryption": encryption
                };
                const reference = utils_1.utils.referenceGenerator();
                const payload = Object.assign(Object.assign({}, data), { reference });
                const response = yield axios_1.default.post(`${constants_1.baseUrl}/electricity/recharge`, payload, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.internetDataPurchase = (secret, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = billPayment_validator_1.billPaymentValidator.internetDataPurchase(data);
                if (error) {
                    throw (0, responseMethod_1.BadRequest)(error.message);
                }
                const encryption = utils_1.utils.encryptData(secret, data);
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json",
                    "Encryption": encryption
                };
                const reference = utils_1.utils.referenceGenerator();
                const payload = Object.assign(Object.assign({}, data), { reference });
                const response = yield axios_1.default.post(`${constants_1.baseUrl}/payout_fee`, payload, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
const billPayment = new BillPayment();

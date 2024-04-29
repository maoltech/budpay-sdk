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
exports.payout = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../utils/constants");
const payout_validator_1 = require("../validator/payout.validator");
const responseMethod_1 = require("../utils/responseMethod");
const utils_1 = require("../utils/utils");
class Payout {
    constructor() {
        this.bankList = (secret) => __awaiter(this, void 0, void 0, function* () {
            const headers = {
                Authorization: `Bearer ${secret}`
            };
            try {
                const response = yield axios_1.default.get(`${constants_1.baseUrl}/bank_list`, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.bankListKES = (secret) => __awaiter(this, void 0, void 0, function* () {
            const headers = {
                Authorization: `Bearer ${secret}`
            };
            try {
                const response = yield axios_1.default.get(`${constants_1.baseUrl}/bank_list/KES`, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.bankListGHS = (secret) => __awaiter(this, void 0, void 0, function* () {
            const headers = {
                Authorization: `Bearer ${secret}`
            };
            try {
                const response = yield axios_1.default.get(`${constants_1.baseUrl}/bank_list/GHS`, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.bankNameVerification = (secret, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = payout_validator_1.payoutValidator.accountNameVerify(data);
                if (error) {
                    throw (0, responseMethod_1.BadRequest)(error.message);
                }
                const reference = utils_1.utils.referenceGenerator();
                const payload = {
                    data,
                    reference
                };
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json"
                };
                const response = yield axios_1.default.post(`${constants_1.baseUrl}/account_name_verify`, payload, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.singlePayout = (secret, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = payout_validator_1.payoutValidator.singlePayout(data);
                if (error) {
                    throw (0, responseMethod_1.BadRequest)(error.message);
                }
                const encryption = utils_1.utils.encryptData(secret, data);
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json",
                    "Encryption": encryption
                };
                const response = yield axios_1.default.post(`${constants_1.baseUrl}/bank_transfer`, data, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.bulkPayout = (secret, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = payout_validator_1.payoutValidator.bulkPayout(data);
                if (error) {
                    throw (0, responseMethod_1.BadRequest)(error.message);
                }
                const encryption = utils_1.utils.encryptData(secret, data);
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json",
                    "Encryption": encryption
                };
                const response = yield axios_1.default.post(`${constants_1.baseUrl}/bulk_bank_transfer`, data, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.verifyPayout = (secret, reference) => __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json"
                };
                const response = yield axios_1.default.get(`${constants_1.baseUrl}/payout/${reference}`, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.listPayout = (secret, currency) => __awaiter(this, void 0, void 0, function* () {
            try {
                let url = `${constants_1.baseUrl}/payout/list_transfers`;
                if (currency) {
                    url = `${constants_1.baseUrl}/payout/list_transfers?currency=${currency}`;
                }
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json"
                };
                const response = yield axios_1.default.get(url, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.feePayout = (secret, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = payout_validator_1.payoutValidator.feePayout(data);
                if (error) {
                    throw (0, responseMethod_1.BadRequest)(error.message);
                }
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json"
                };
                const response = yield axios_1.default.post(`${constants_1.baseUrl}/payout_fee`, data, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.walletBalance = (secret, currency) => __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json"
                };
                const response = yield axios_1.default.get(`${constants_1.baseUrl}/wallet_balance/${currency}`, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.walletTransactions = (secret, currency) => __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json"
                };
                const response = yield axios_1.default.get(`${constants_1.baseUrl}/wallet_transactions/${currency}`, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.payout = new Payout();

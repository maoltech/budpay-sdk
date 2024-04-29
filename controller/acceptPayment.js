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
exports.acceptPayment = void 0;
const acceptPayment_validator_1 = require("../validator/acceptPayment.validator");
const responseMethod_1 = require("../utils/responseMethod");
const utils_1 = require("../utils/utils");
const constants_1 = require("../utils/constants");
const axios_1 = __importDefault(require("axios"));
class AcceptPayment {
    constructor() {
        this.s2sCardEncryption = (secret, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = acceptPayment_validator_1.acceptPaymentValidator.s2sCardEncryptionPayload(data);
                if (error) {
                    (0, responseMethod_1.BadRequest)(error.message);
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
                const response = yield axios_1.default.post(`${constants_1.s2sBaseUrl}/test/encryption`, payload, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        //transaction/initialize
        this.s2sCardTransaction = (secret, data) => __awaiter(this, void 0, void 0, function* () {
            const { error } = acceptPayment_validator_1.acceptPaymentValidator.s2sCardPaymentPayload(data);
            if (error) {
                (0, responseMethod_1.BadRequest)(error.message);
            }
            const reference = utils_1.utils.referenceGenerator();
            const payload = Object.assign(Object.assign({}, data), { reference });
            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json"
            };
            try {
                const response = yield axios_1.default.post(`${constants_1.s2sBaseUrl}/transaction/initialize`, payload, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.s2sBankTransfer = (secret, data) => __awaiter(this, void 0, void 0, function* () {
            const { error } = acceptPayment_validator_1.acceptPaymentValidator.s2sBankTransferPayload(data);
            if (error) {
                (0, responseMethod_1.BadRequest)(error.message);
            }
            const reference = utils_1.utils.referenceGenerator();
            const payload = Object.assign(Object.assign({}, data), { reference });
            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json"
            };
            try {
                const response = yield axios_1.default.post(`${constants_1.s2sBaseUrl}/banktransfer/initialize`, payload, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.s2sCardEncryptionV2 = (secret, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = acceptPayment_validator_1.acceptPaymentValidator.s2sCardEncryptionPayload(data);
                if (error) {
                    (0, responseMethod_1.BadRequest)(error.message);
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
                const response = yield axios_1.default.post(`${constants_1.s2sBaseUrlV2}/test/encryption`, payload, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        //transaction/initialize
        this.s2sCardTransactionV2 = (secret, data) => __awaiter(this, void 0, void 0, function* () {
            const { error } = acceptPayment_validator_1.acceptPaymentValidator.s2sCardPaymentPayload(data);
            if (error) {
                (0, responseMethod_1.BadRequest)(error.message);
            }
            const reference = utils_1.utils.referenceGenerator();
            const payload = Object.assign(Object.assign({}, data), { reference });
            const headers = {
                Authorization: `Bearer ${secret}`,
                "content-type": "application/json"
            };
            try {
                const response = yield axios_1.default.post(`${constants_1.s2sBaseUrlV2}/transaction/initialize`, payload, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.s2sVerifyTransaction = (secret, reference) => __awaiter(this, void 0, void 0, function* () {
            const headers = {
                Authorization: `Bearer ${secret}`
            };
            try {
                const response = yield axios_1.default.get(`${constants_1.s2sBaseUrlV2}/transaction/verify/${reference}`, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.acceptPayment = new AcceptPayment();

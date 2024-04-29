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
exports.identityVerification = void 0;
const axios_1 = __importDefault(require("axios"));
const responseMethod_1 = require("../utils/responseMethod");
const utils_1 = require("../utils/utils");
const indentityVerification_validator_1 = require("../validator/indentityVerification.validator");
const constants_1 = require("../utils/constants");
class IdentityVerification {
    constructor() {
        this.verifyAccountName = (secret, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = indentityVerification_validator_1.identityVerificationValidator.verifyAccountName(data);
                if (error) {
                    throw (0, responseMethod_1.BadRequest)(error.message);
                }
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json"
                };
                const response = yield axios_1.default.post(`${constants_1.baseUrl}/account_name_verify`, data, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
        this.bvnVerfication = (secret, data) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = indentityVerification_validator_1.identityVerificationValidator.bvnVerification(data);
                if (error) {
                    throw (0, responseMethod_1.BadRequest)(error.message);
                }
                const headers = {
                    Authorization: `Bearer ${secret}`,
                    "content-type": "application/json"
                };
                const reference = utils_1.utils.referenceGenerator();
                const payload = Object.assign(Object.assign({}, data), { reference });
                const response = yield axios_1.default.post(`${constants_1.baseUrl}/bvn/verify`, payload, { headers });
                return response.data;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.identityVerification = new IdentityVerification();

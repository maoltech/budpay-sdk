"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.payoutValidator = void 0;
const joi_1 = __importDefault(require("joi"));
class PayoutValidator {
    constructor() {
        this.accountNameVerify = (data) => {
            const accountNameVerifySchema = joi_1.default.object({
                bank_code: joi_1.default.string().required(),
                account_number: joi_1.default.string().required(),
                currency: joi_1.default.string().required()
            });
            return accountNameVerifySchema.validate(data);
        };
        this.singlePayout = (data) => {
            const singlePayoutSchema = joi_1.default.object({
                bank_code: joi_1.default.string().required(),
                bank_name: joi_1.default.string().required(),
                amount: joi_1.default.string().required(),
                account_number: joi_1.default.string().required(),
                currency: joi_1.default.string().required(),
                narration: joi_1.default.string(),
                paymentMode: joi_1.default.string(),
            });
            return singlePayoutSchema.validate(data);
        };
        this.feePayout = (data) => {
            const feePayoutSchema = joi_1.default.object({
                amount: joi_1.default.string().required(),
                currency: joi_1.default.string().required(),
            });
            return feePayoutSchema.validate(data);
        };
        this.bulkPayout = (data) => {
            const transfersSchema = joi_1.default.object({
                amount: joi_1.default.string().required(),
                bank_code: joi_1.default.string().required(),
                bank_name: joi_1.default.string().required(),
                account_number: joi_1.default.string().required(),
                narration: joi_1.default.string()
            });
            const bulkPayoutSchema = joi_1.default.object({
                currency: joi_1.default.string().required(),
                transfers: joi_1.default.array().items(transfersSchema).min(1).required()
            });
            return bulkPayoutSchema.validate(data);
        };
    }
}
exports.payoutValidator = new PayoutValidator();

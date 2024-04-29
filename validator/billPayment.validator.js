"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.billPaymentValidator = void 0;
const joi_1 = __importDefault(require("joi"));
class BillPaymentValidator {
    constructor() {
        this.airtimeTopup = (data) => {
            const airtimeTopupSchema = joi_1.default.object({
                provider: joi_1.default.string().required(),
                number: joi_1.default.string().required(),
                amount: joi_1.default.string().required()
            });
            return airtimeTopupSchema.validate(data);
        };
        this.internetDataPurchase = (data) => {
            const airtimeTopupSchema = joi_1.default.object({
                provider: joi_1.default.string().required(),
                number: joi_1.default.string().required(),
                plan_id: joi_1.default.string().required()
            });
            return airtimeTopupSchema.validate(data);
        };
        this.tvSubscription = (data) => {
            const tvSubscriptionSchema = joi_1.default.object({
                provider: joi_1.default.string().required(),
                number: joi_1.default.string().required(),
                code: joi_1.default.string()
            });
            return tvSubscriptionSchema.validate(data);
        };
        this.electricityRecharge = (data) => {
            const tvSubscriptionSchema = joi_1.default.object({
                provider: joi_1.default.string().required(),
                number: joi_1.default.string().required(),
                type: joi_1.default.string().required(),
                amount: joi_1.default.string()
            });
            return tvSubscriptionSchema.validate(data);
        };
    }
}
exports.billPaymentValidator = new BillPaymentValidator();

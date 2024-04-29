"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.acceptPaymentValidator = void 0;
const joi_1 = __importDefault(require("joi"));
class AcceptPaymentValidator {
    constructor() {
        this.s2sCardPaymentPayload = (data) => {
            const s2sCardPaymentSchema = joi_1.default.object({
                amount: joi_1.default.string().required(),
                card: joi_1.default.string().required(),
                callback: joi_1.default.string().uri().required(),
                currency: joi_1.default.string().required(),
                email: joi_1.default.string().email().required(),
                pin: joi_1.default.string().required(),
            });
            return s2sCardPaymentSchema.validate(data);
        };
        this.s2sBankTransferPayload = (data) => {
            const s2sCardPaymentSchema = joi_1.default.object({
                amount: joi_1.default.string().required(),
                name: joi_1.default.string().required(),
                currency: joi_1.default.string().required(),
                email: joi_1.default.string().email().required()
            });
            return s2sCardPaymentSchema.validate(data);
        };
        this.s2sCardEncryptionPayload = (data) => {
            const s2sCardEncryptionSchema = joi_1.default.object({
                number: joi_1.default.string().creditCard().required(),
                expiryMonth: joi_1.default.string().regex(/^(0[1-9]|1[0-2])$/).required(),
                expiryYear: joi_1.default.string().regex(/^\d{2}$/).required(),
                cvv: joi_1.default.string().length(3).required(),
                pin: joi_1.default.string().optional()
            });
            return s2sCardEncryptionSchema.validate(data);
        };
    }
}
exports.acceptPaymentValidator = new AcceptPaymentValidator();

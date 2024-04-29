"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.identityVerificationValidator = void 0;
const joi_1 = __importDefault(require("joi"));
class IdentityVerificationValidator {
    constructor() {
        this.verifyAccountName = (data) => {
            const verifyAccountNameSchema = joi_1.default.object({
                account_name: joi_1.default.string().required(),
                bank_code: joi_1.default.string().required()
            });
            return verifyAccountNameSchema.validate(data);
        };
        this.bvnVerification = (data) => {
            const verifyAccountNameSchema = joi_1.default.object({
                bvn: joi_1.default.string().required(),
                callback_url: joi_1.default.string().uri().required(),
                first_name: joi_1.default.string(),
                middle_name: joi_1.default.string(),
                last_name: joi_1.default.string(),
                phone_number: joi_1.default.string(),
                dob: joi_1.default.string(),
            });
            return verifyAccountNameSchema.validate(data);
        };
    }
}
exports.identityVerificationValidator = new IdentityVerificationValidator();

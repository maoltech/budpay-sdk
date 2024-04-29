"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = void 0;
const hmac_sha512_1 = __importDefault(require("crypto-js/hmac-sha512"));
class Utils {
    constructor() {
        this.referenceGenerator = () => {
            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        };
        this.encryptData = (secret, data) => {
            return (0, hmac_sha512_1.default)(data, secret).toString();
        };
    }
}
exports.utils = new Utils();

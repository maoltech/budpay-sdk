import { required } from "joi";
import hmacSHA512 from 'crypto-js/hmac-sha512';
class Utils {

    public referenceGenerator = () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    public encryptData = (secret: string, data: any): string => {
        return hmacSHA512(data, secret).toString();
    };
}

export const utils = new Utils();
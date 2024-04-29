import {acceptPayment} from "./controller/acceptPayment";
import { payout } from "./controller/payout";
import { billPayment } from "./controller/billPayments";
import { identityVerification } from "./controller/identityVerification";

class BudpaySdk {

    acceptPayment = acceptPayment;
    payout = payout;
    billPayment = billPayment;
    identityVerification = identityVerification;

}
const budpaySdk = new BudpaySdk();
export default budpaySdk;
export {acceptPayment, payout, billPayment, identityVerification}

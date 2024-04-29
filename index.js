"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identityVerification = exports.billPayment = exports.payout = exports.acceptPayment = void 0;
const acceptPayment_1 = require("./controller/acceptPayment");
Object.defineProperty(exports, "acceptPayment", { enumerable: true, get: function () { return acceptPayment_1.acceptPayment; } });
const payout_1 = require("./controller/payout");
Object.defineProperty(exports, "payout", { enumerable: true, get: function () { return payout_1.payout; } });
const billPayments_1 = require("./controller/billPayments");
Object.defineProperty(exports, "billPayment", { enumerable: true, get: function () { return billPayments_1.billPayment; } });
const identityVerification_1 = require("./controller/identityVerification");
Object.defineProperty(exports, "identityVerification", { enumerable: true, get: function () { return identityVerification_1.identityVerification; } });
class BudpaySdk {
    constructor() {
        this.acceptPayment = acceptPayment_1.acceptPayment;
        this.payout = payout_1.payout;
        this.billPayment = billPayments_1.billPayment;
        this.identityVerification = identityVerification_1.identityVerification;
    }
}
const budpaySdk = new BudpaySdk();
exports.default = budpaySdk;


interface Is2sCardPaymentPayload {
    amount: string
    card: string
    callback: string
    currency: string
    email: string
    pin: string
};

interface Is2sCardEncryptionPayload {
    number: string;
    expiryMonth: string;
    expiryYear: string;
    cvv: string;
    pin?: string; 
};

export {
    Is2sCardPaymentPayload,
    Is2sCardEncryptionPayload
};

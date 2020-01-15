import {GooglePay} from "react-native-google-pay";
import {Alert} from "react-native";

const allowedCardNetworks = ['VISA', 'MASTERCARD'];
const allowedCardAuthMethods = ['PAN_ONLY', 'CRYPTOGRAM_3DS'];

const tokenizationSpecification = {
    type: 'PAYMENT_GATEWAY',
    gateway: 'example',
    gatewayMerchantId: 'exampleGatewayMerchantId',
};

const transaction = (price) => ({
    totalPrice: `${price}`,
    totalPriceStatus: 'FINAL',
    currencyCode: 'UAH',
});

const merchantName = 'Example Merchant';

const cardPaymentMethod = {
    tokenizationSpecification,
    allowedCardNetworks,
    allowedCardAuthMethods,
};

const requestData = (price) => ({
    cardPaymentMethod,
    transaction: transaction(price),
    merchantName,
});

const handleSuccess = (token) => {
    // Send a token to your payment gateway
    Alert.alert('Success', `token: ${token}`)
};

const handleError = (error) => Alert.alert('Error', `${error.code}\n${error.message}`);

export const payWithGooglePay = (price) => {
    // Check if Google Pay is available
    GooglePay.isReadyToPay(allowedCardNetworks, allowedCardAuthMethods)
        .then((ready) => {
            if (ready) {
                // Request payment token
                GooglePay.requestPayment(requestData(price))
                    .then(handleSuccess)
                    .catch(handleError)
            }
        })
};

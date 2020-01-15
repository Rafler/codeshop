import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: '#FFF'
    },
    item: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 40,

    },
    priceBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    info: {
        padding: 20,
    },
    price: {
        fontSize: 65,
        fontWeight: 'bold',
        color: 'black',
    },
    googlePay: {
        alignSelf: 'center',

    },
    mainImage: {
        flex: 1,
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
    }
});

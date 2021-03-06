import {Dimensions, StyleSheet} from "react-native";

const { width } = Dimensions.get('window');
export const  qrSize = width * 0.7;
export const styles  = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    qr: {
        marginTop: '20%',
        marginBottom: '20%',
        width: qrSize,
        height: qrSize,
    },
    description: {
        fontSize: width * 0.09,
        marginTop: '10%',
        textAlign: 'center',
        width: '70%',
        color: 'white',
    },
    cancel: {
        fontSize: width * 0.05,
        textAlign: 'center',
        width: '70%',
        color: 'white',
    },
});

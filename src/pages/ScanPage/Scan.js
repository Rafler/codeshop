import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons';

import { BarCodeScanner } from 'expo-barcode-scanner';

import SplashScreen from 'react-native-splash-screen';
import {qrSize, styles} from "./styles";

export const BarcodeScannerExample = ({ navigation }) => {
    const [ hasCameraPermission, setCameraPermission ] = useState(null);
    const [scanned, setScanned] = useState(false);

    const getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        setCameraPermission({ hasCameraPermission: status === 'granted' });
    };

    useEffect(()=> {
        getPermissionsAsync();
        SplashScreen.hide();
    }, []) ;

        if (hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned({ scanned: true });
    navigation.push('Item', {
        itemId: data,
    })
};
        return (
            <View
                style={styles.main}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={[StyleSheet.absoluteFill, styles.container]}
                >
                    <Text style={styles.description}>Scan your QR code</Text>
                    <Ionicons
                    name={'ios-qr-scanner'}
                    size={qrSize}
                    color={'#000'}/>
                </BarCodeScanner>


                {scanned && (
                    <Button
                        title={'Tap to Scan Again'}
                        onPress={() => setScanned(false )}
                    />
                )}
            </View>
)
};

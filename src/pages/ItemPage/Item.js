import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Platform , Image} from 'react-native';
import { GooglePay } from 'react-native-google-pay';
import Spinner from 'react-native-loading-spinner-overlay';
import { BRAND_COLOR_LOADING} from "../../styles/colors";
import {styles} from "./styles";
import {payWithGooglePay} from "./payments";


const Item =  ( {navigation } ) => {
   const [loading, changeLoading] = useState(true);
   const [item, setItem] = useState({});
   const itemId = navigation.getParam('itemId', 'NO-ID');
    useEffect(()=>{
        fetch('http://5df37d01f9e7ae001480126b.mockapi.io/api/v1/data').then(res => res.json())
            .then(data => {
                const found = data.find(obj => obj.id === itemId);
                if (!found){
                    return (
                        <View style={StyleSheet.absoluteFill}>
                        <Text>Something went wrong</Text>
                        </View>
                    )
                } else {
                    setItem(found)
                }
            })
            .catch(err => (<Text>Something went wrong {err}</Text>)).finally(changeLoading(false));

        if (Platform.OS === 'android') {
            GooglePay.setEnvironment(GooglePay.ENVIRONMENT_TEST)
        }

    },[]);

    return (
        <View style={styles.item}>
            <Spinner
                visible={loading}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
                overlayColor={BRAND_COLOR_LOADING}
            />
            <Image
            source={require('../../assets/code.png')}
            style={styles.mainImage}
            />
            <View style={styles.info}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.priceBlock}>
                <Text style={styles.price}>Price:</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => payWithGooglePay(item.price)} style={styles.googlePay}>
                <Image
                source={require('../../assets/GooglePay.png')}/>
            </TouchableOpacity>
        </View>
        </View>
    );
};



export default Item;

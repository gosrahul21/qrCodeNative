import * as React from 'react';
import { View ,Text, StyleSheet, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function QrCodeResult({route}){
    const { data, type } = route.params;
    // fetch the hardware id of the device and make post request 

    return <View style={styles.container}>
        <Ionicons name='md-checkmark-circle' size={60} color='green'/>
        <Text style={{fontSize:32, textAlign:'center' }}>
            Your Device has been successfully added to the server
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        height:Dimensions.get('window'). height,
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
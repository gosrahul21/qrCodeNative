import * as React from 'react';
import { View,Text,Button, StyleSheet, Dimensions } from 'react-native';

export default function Home({navigation}){
    
    return <View style={styles.container}>
        
        <Button title='Scan QrCode' onPress={()=>{
            navigation.navigate('QrCodeScanner');
        }}/>
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
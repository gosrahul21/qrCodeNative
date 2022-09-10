import * as React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';


export default function Error(props){
    return <View style={styles.container}>
        <Text style={{textAlign:"center", fontSize:32}}>
            Error occured in adding your device
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
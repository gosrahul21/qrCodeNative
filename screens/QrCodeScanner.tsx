import * as React from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState,useEffect } from 'react'; 
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { getDeviceInfo, getDevieId } from '../resources/device';
import { addDevice } from '../api/addDevice';
import { generateKeyPair } from '../functions';

export default function QrCodeScanner({navigation}){
    const [hasPermission, setHasPermission] = useState<boolean|null>(null);
    const [scanned, setScanned] = useState(false);
    
    useEffect(() => {
      const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      };
      
      getBarCodeScannerPermissions();
    }, []);
    
    const handleBarCodeScanned = async ({ type, data }) => {
      setScanned(true);
      try {
          const deviceInfo = await addDevice(data);
          // generate account 
          const publicKey = await generateKeyPair();
          navigation.replace('QrCodeResult',{data:data, type});
          console.log(publicKey);
      } catch (error) {
          console.log(error.message, error.status);
          console.log(JSON.stringify(error));
          navigation.replace('Error')
      }
    };
    
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned &&  <ActivityIndicator size="large" color="#00ff00" />}
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

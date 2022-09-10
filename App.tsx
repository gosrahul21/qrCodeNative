import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import QrCodeScanner from './screens/QrCodeScanner';
import QrCodeResult from './screens/QrCodeResult';
import Error from './screens/Error';

import './global';

export default function App(){
    const {Navigator,Screen} = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="Home" component={Home}  />
                <Screen name="QrCodeScanner" component={QrCodeScanner} options={ {title:'QrcodeScanner'} } />
                <Screen name="QrCodeResult" component={QrCodeResult} options={ {title:'QrCodeResult'} } />
                <Screen name="Error" component={Error} options={ {title:'Error occured'} } />
            </Navigator>
        </NavigationContainer>
    );
}
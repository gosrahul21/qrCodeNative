import {v4 as uuidv4} from 'uuid';
import { getItemAsync, setItemAsync } from 'expo-secure-store';
import * as Device from 'expo-device';
import { DeviceEventEmitter } from 'react-native';

const uuid = uuidv4();

export async function getDevieId(){
    let deviceId = await getItemAsync('secure_device_id');
    if(!deviceId){
        await setItemAsync('secure_device_id', uuid);
        deviceId = uuid;
    }
    return deviceId;
}


export async function getDeviceInfo(){
    return {
        deviceId: await getDevieId(),
        deviceName: Device.deviceName,
        designName: Device.designName,
        modelId: Device.modelId,
        modelName: Device.modelName,
        manufacturer: Device.manufacturer,
        osName: Device.osName,
        osVersion: Device.osVersion,
        osBuildId: Device.osBuildId,
        osFingerPrint: Device.osBuildFingerprint,
        deviceType: await Device.getDeviceTypeAsync()
    }
}
import axios from 'axios';
import { getDeviceInfo } from '../resources/device';
const uri = 'https://silent-steaks-lay-49-37-51-113.loca.lt';

export async function addDevice(barCodeId: string){
    // fetch device details
    const deviceInfo = await getDeviceInfo();
    console.log({barCodeId, ...deviceInfo }, `${uri}/device`);
    // make api request
    const {data} = await axios.post(`${uri}/device`,{barCodeId, ...deviceInfo });
    return data;
}
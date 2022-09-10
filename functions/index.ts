import { generateAccount } from "../resources/web3";
import * as SecureStore from 'expo-secure-store';
import * as Random from 'expo-random';
/**
 * 
 * @returns Promise of public key of the generated key pair
 */
export async function generateKeyPair(){
    const {address, privateKey} = await generateAccount();
    // save the private key in secure store
    await SecureStore.setItemAsync('privateKey', privateKey);
    return address;
}
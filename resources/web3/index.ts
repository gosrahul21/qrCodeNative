import Web3 from "web3";

const web3 =  new Web3(Web3.givenProvider|| 'https://rinkeby.infura.io/v3/dcddacefd5264afab7f1cfe3dd961bd7' );
/**
 * return promise of object containing public and private key
 */
export async function generateAccount(){
    const { address, privateKey }= web3.eth.accounts.create();
    return { address, privateKey };
}
import Snowflake from '../contracts/Snowflake.json';
import HydroToken from '../contracts/HydroToken.json'
import IdentityRegistry from '../contracts/IdentityRegistry.json'
import ClientRainDrop from '../contracts/ClientRaindrop.json'
import OldClientRainDrop from '../contracts/OldClientRaindrop.json'
import ProtectedWalletFactory from '../contracts/ProtectedWalletFactory.json'
import ProtectedWallet from '../contracts/ProtectedWallet.json'
import Web3 from 'web3';
import Contract from 'web3-eth-contract';
 
const providerURL = "https://rinkeby.infura.io/v3/75cc8cba22ab40b9bfa7406ae9b69a27";

const snowflakeAddress = '0xB0D5a36733886a4c5597849a05B315626aF5222E'

const hydroAddress = '0x4959c7f62051D6b2ed6EaeD3AAeE1F961B145F20'

const identityRegistryAddress = '0xa7ba71305bE9b2DFEad947dc0E5730BA2ABd28EA'

const clientRaindropAddress = '0x387Ce3020e13B0a334Bb3EB25DdCb73c133f1D7A'

const oldClientRaindropAddress = '0xb29778Cf8abFFF8BF245b9060CD2299ADb358040'

const protectedWalletFactoryAddress = '0xF834224699b6c1Fd5a9dF0DBbe7674Ba7C31db49'

const abi = [{"constant":false,"inputs":[{"name":"_greeting","type":"string"}],"name":"greet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getGreeting","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}];


class Web3Service {
    web3 = "";

    async initContract() {
        this.web3 = await new Web3(new Web3.providers.HttpProvider(providerURL));  
    }

    async createSnowflakeContract() {
        const snowflakeContract = await new this.web3.eth.Contract(Snowflake.abi, snowflakeAddress)
        return snowflakeContract;
    }

    async createHydroTokenContract() {  
        // const myContract = await new this.web3.eth.Contract(abi, hydroAddress);
        // const myData = myContract.methods.greet( "hello blockchain devs").encodeABI();
        // console.log(myData)
        const hydroTokenContract = await new this.web3.eth.Contract(HydroToken.abi, hydroAddress)
        return hydroTokenContract;
    }

    async createIdentityRegistryContract() {
        const identityRegistryContract = await new this.web3.eth.Contract(IdentityRegistry.abi, identityRegistryAddress)
        return identityRegistryContract;
    }

    async createClientRaindropAddress() {
        const clientRainDropContract = await new this.web3.eth.Contract(ClientRainDrop.abi, clientRaindropAddress)
        return clientRainDropContract;
    }

    async createOldClientRaindropAddress() {
        const oldClientRainDrop = await new this.web3.eth.Contract(OldClientRainDrop.abi, oldClientRaindropAddress)
        return oldClientRainDrop;
    }

}


const w3s = new Web3Service()
export default w3s;

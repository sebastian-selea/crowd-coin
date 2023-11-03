import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
    console.log("web3 provider : " + window.web3.currentProvider);
    web3 = new Web3(window.web3.currentProvider);
} else {
    const provider = new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/d6c8ab8227cf41b2b28c26ca7c20c11b");
    web3 = new Web3(provider);
}

export default web3;
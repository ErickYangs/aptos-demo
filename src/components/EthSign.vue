<template>
  <div>
    <button @click="handlerWeb3">web3 sign</button>
  </div>
  <div>
    <button @click="handlerEthers">ethers sign</button>
  </div>
</template>

<script setup>
import Web3 from "web3";
import { ethers } from "ethers";
// 0x94a8df135c96c8f994638bd7a327f44404feab6287f0d5270a50660aef6e53ee
const signStr =
  "0x94a8df135c96c8f994638bd7a327f44404feab6287f0d5270a50660aef6e53ee";
// 0x360d5e83d59b1591d83147b1ada02b714fba8a65a0b63629c078c151434dcfb060d197710f440dc967ba9ad572a9a97acb46a050a57b64d5e06b7722e445197d1b
const handlerWeb3 = async () => {
  const web3 = new Web3(Web3.givenProvider);
  const res = await web3.eth.requestAccounts();
  console.log(res);
  const ethAddress = await web3.eth.getAccounts();
  console.log("ethAddress", ethAddress);
  const signature = await web3.eth.personal.sign(signStr, ethAddress[0]);
  console.log(signature);
};

const handlerEthers = async () => {
  const ether = new ethers.providers.Web3Provider(window.ethereum);
  //   const accounts = await providers.request({ method: "eth_requestAccounts" });
  const signer = ether.getSigner();
  const messageHashBytes = ethers.utils.arrayify(
    "0x94a8df135c96c8f994638bd7a327f44404feab6287f0d5270a50660aef6e53ee"
  );
  const signature = await signer.signMessage(messageHashBytes);
  console.log(signature);
};
</script>

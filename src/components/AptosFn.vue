<template>
  <div class="fn-list">
    Petra Wallet
    <ul class="aptos-list">
      <li>
        <div>
          <button class="primary" @click="getAptosWallet">Link</button>
          <button class="primary" @click="handlerConnect">Connect</button>
        </div>
        <div class="result">{{ account }}</div>
      </li>

      <li>
        <div>
          <button class="primary" @click="handlerGetNetwork">Network</button>
        </div>
        <div class="result">{{ network }}</div>
      </li>

      <li>
        <div>
          <button class="primary" @click="handlerTx">handlerTx</button>
        </div>
        <div class="result">{{ account }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import useAptos from "../core/aptos";
const {
  getAptosWallet,
  handlerConnect,
  account,
  handlerTx,
  handlerGetNetwork,
  network,
} = useAptos();
</script>

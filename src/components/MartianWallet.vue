<template>
  <div class="fn-list">
    Martian Wallet
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
    <button class="primary" @click="handlerStart">Start</button>
  </div>
</template>

<script setup>
import useAptos from "../core/martian";
const {
  getAptosWallet,
  handlerConnect,
  account,
  handlerTx,
  handlerGetNetwork,
  network,
} = useAptos();

const approve = () => {
  return new Promise((resolve, reject) => {
    const a = "link";
    if (a) {
      resolve(true);
    } else {
      reject(false);
    }
  });
};

const handlerStart = async () => {
  // eslint-disable-next-line no-constant-condition
  if (true) {
    const check = async () => {
      return new Promise((resolve) => {
        setTimeout(async () => {
          const result = await approve();
          resolve(result);
        }, 3000);
      });
    };
    console.log('start');
    await check();
    console.log('end');
  }
  console.log('outer');
};
</script>

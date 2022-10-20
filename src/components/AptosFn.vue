<template>
  <div class="fn-list">
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

<style lang="scss">
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.aptos-list {
  li {
    background-color: #ccc;
    padding: 14px 10px;
    text-align: left;
  }
  li + li {
    margin-top: 20px;
  }
}
button.primary {
  padding: 6px 20px;
  background-color: bisque;
  border: none;
  border-radius: 5px;
}
.primary + .primary {
  margin-left: 20px;
}
.result {
  padding: 4px 10px;
  margin-top: 10px;
}
</style>

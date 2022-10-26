<template>
  <div><AptosFn /><MartianWallet /></div>
</template>

<script setup>
import AptosFn from "./components/AptosFn.vue";
import MartianWallet from "./components/MartianWallet.vue";

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


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
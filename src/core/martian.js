import { onMounted, ref } from "vue";
import { ElMessage } from "element-plus";
const useAptos = () => {
  const account = ref(null);
  const network = ref(null);
  const balance = ref(null);

  const getAptosWallet = () => {
    if ("martian" in window) {
      console.log(window.martian);
      initEvent();
      return window.martian;
    } else {
      window.open("https://www.martianwallet.xyz/", "_blank");
    }
  };

  const initEvent = () => {
    window.aptos.onNetworkChange((newNetwork) => {
      console.log("newNetwork", newNetwork);
    });
  };

  const handlerConnect = async () => {
    const wallet = getAptosWallet();
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await wallet.connect();
      console.log(response); // { address: string, address: string }
      account.value = await wallet.account();
      console.log(account.value); // { address: string, address: string }
      ElMessage({
        message: "get account success",
        type: "success",
      });
    } catch (error) {
      throw error;
      // { code: 4001, message: "User rejected the request."}
    }
  };

  const handlerGetNetwork = async () => {
    const isPetraInstalled = getAptosWallet();
    network.value = await isPetraInstalled.network();
  };

  const handlerGetBalance = async () => {
    const isPetraInstalled = getAptosWallet();
    balance.value = await isPetraInstalled.getBalance();
  };

  const handlerTx = async () => {
    // const transaction = {
    //   arguments: [],
    //   function: "0x1::managed_coin::register",
    //   type: "entry_function_payload",
    //   type_arguments: ["0x3bd490595ce5d78c7573c2a1ba16654ffd604ff32fd8d57a1313a4965828ff4e::moon_coin::MoonCoin"],
    // };
    // const transaction = {
    //     arguments: ['0xc70b64db5091d896b81af98751a6160971b440be71148bd8d5831f0ca62871bc', 1000],
    //     function: "0x1::managed_coin::mint",
    //     type: "entry_function_payload",
    //     type_arguments: ["0x3bd490595ce5d78c7573c2a1ba16654ffd604ff32fd8d57a1313a4965828ff4e::moon_coin::MoonCoin"],
    //   };
     const payload = {
        arguments: ['0x3bd490595ce5d78c7573c2a1ba16654ffd604ff32fd8d57a1313a4965828ff4e', 1000000],
        function: "0x1::coin::transfer",
        type: "entry_function_payload",
        type_arguments: ["0x3bd490595ce5d78c7573c2a1ba16654ffd604ff32fd8d57a1313a4965828ff4e::moon_coin::MoonCoin"],
      };
    // const isPetraInstalled = getAptosWallet();
    // // Send transaction to the extension to be signed and submitted to chain
    // const response = await isPetraInstalled.signAndSubmitTransaction(
    //   transaction
    // );
    // console.log("response", response);
    // Create a transaction

    const response = await window.martian.connect();
    const sender = response.address;
    // const payload = {
    //   function: "0x1::coin::transfer",
    //   type_arguments: ["0x1::aptos_coin::AptosCoin"],
    //   arguments: [
    //     "0x997b38d2127711011462bc42e788a537eae77806404769188f20d3dc46d72750",
    //     50,
    //   ],
    // };
    const transaction = await window.martian.generateTransaction(
      sender,
      payload
    );
    console.log("transaction", transaction);

    const txnHash = await window.martian.signAndSubmitTransaction(transaction);
    console.log("txnHash", txnHash);

    // Send transaction to the extension to be signed and returns
    // const signedTransaction = await isPetraInstalled.signTransaction(
    //   transaction
    // );
    // console.log("signedTransaction", signedTransaction);
  };
  onMounted(() => {});
  return {
    getAptosWallet,
    handlerConnect,
    account,
    handlerTx,
    handlerGetNetwork,
    network,
    handlerGetBalance,
    balance,
  };
};
export default useAptos;

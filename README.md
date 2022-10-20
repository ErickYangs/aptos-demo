### Petra Wallet



##### https://aptos.dev/guides/building-wallet-extension



```javascript
// import transaction build from aptos sdk: https://github.com/aptos-labs/aptos-core/tree/main/ecosystem/typescript/sdk
import { BCS, TxnBuilderTypes } from 'aptos';

// Establish connection to the wallet
const result = await (window as any).aptos.connect()

// Check connection status of wallet
const status = await (window as any).aptos.isConnected()

// Gets the address of the account signed into the wallet
const accountAddress = await (window as any).aptos.account()

// Create a transaction
const transaction = {
    arguments: [address, '717'],
    function: '0x1::coin::transfer',
    type: 'entry_function_payload',
    type_arguments: ['0x1::aptos_coin::AptosCoin'],
};

// Send transaction to the extension to be signed and submitted to chain
const response = await (window as any).aptos.signAndSubmitTransaction(transaction)

// Send transaction to the extension to be signed and returns
const signedTransaction = await (window as any).aptos.signTransaction(transaction)

// Disconnect dApp from the wallet
await (window as any).aptos.disconnect()
```



##### https://petra.app/docs/connect-to-petra



```javascript
## Connecting
const isPetraInstalled = window.aptos
const getAptosWallet = () => {
    if ('aptos' in window) {
        return window.aptos;
    } else {
        window.open('https://petra.app/', `_blank`);
    }
}
## Account

const wallet = getAptosWallet();
try {
    const response = await wallet.connect();
    console.log(response); // { address: string, address: string }

    const account = await wallet.account();
    console.log(account); // { address: string, address: string }
} catch (error) {
    // { code: 4001, message: "User rejected the request."}
}

## Sending a Transaction
const wallet = getAptosWallet(); // see "Connecting"

// Example Transaction, following an [EntryFunctionPayload](https://github.com/aptos-labs/aptos-core/blob/main/ecosystem/typescript/sdk/src/generated/models/EntryFunctionPayload.ts#L8-L21)

// todo 参数如何构造？
const transaction = {
    arguments: [address, '717'],
    function: '0x1::coin::transfer',
    type: 'entry_function_payload',
    type_arguments: ['0x1::aptos_coin::TestCoin'],
};


try {
    const pendingTransaction = await (window as any).aptos.signAndSubmitTransaction(transaction);

    // In most cases a dApp will want to wait for the transaction, in these cases you can use the typescript sdk
    const client = new AptosClient('https://testnet.aptoslabs.com');
    const txn = await client.waitForTransactionWithResult(pendingTransaction.hash);
} catch (error) {
    // see "Errors"
}

## Event Listening（具体要看使用文档）
// window.aptos.onNetworkChange
// window.aptos.onAccountChange
// window.aptos.onDisconnect
```



### Martian

##### https://docs.martianwallet.xyz/docs/integration/detecting-the-provider

```javascript
## provider
const isMartianWalletInstalled = window.martian
const getProvider = () => {
  if ("martian" in window) {
    return(window.martian);
  }
  window.open("https://www.martianwallet.xyz/", "_blank");
};

## Account
await window.martian.connect();
await window.martian.account()
// {  
//    address: '0x2d5b190a5261c3715c452b89d61549718503171356109805755e4590d1b74399', 
//    publicKey: '0x3d473ebb20ed4264a10083978af3f6cde9ed0d84ee285885c8e5f18f22773926'
// }
await window.martian.isConnected()
// true


## Event
// https://docs.martianwallet.xyz/docs/methods/account-change-event
window.martian.onNetworkChange((name) => console.log(name));
window.martian.onAccountChange((address) => console.log("Changed address", address));
```



### Fewcha Wallet

##### https://docs.fewcha.app/get-started/connect



```javascript
## connect 
await window.fewcha.connect();
## account
async window.fewcha.account()
async window.fewcha.getNetworkType()
async window.fewcha.getBalance()

## Transaction 两步
const receiverAddress = "0xcca3338dfda1b5e9bab0d744c3b50a9a24e3fe55bba48917307e813a4535e034";
const amount = 1000;

const payload = {
  type: "entry_function_payload",
  function: "0x1::coin::transfer",
  type_arguments: ["0x1::aptos_coin::AptosCoin"],
  arguments: [receiverAddress, amount],
};

const rawTransaction = await window.fewcha.generateTransaction(payload);
if (rawTransaction.status !== 200) return;

const txnHash = await window.fewcha.signAndSubmitTransaction(rawTransaction.data);

console.log("txnHash", txnHash);
```



### Rise Wallet



##### https://docs.risewallet.io/introduction/integrations/integrate-rise-wallet/without-the-wallet-adapter/detecting-the-provider



```javascript
## connect
const isRiseInstalled = window.rise && window.rise.isRise;
const getProvider = () => {
  if ('rise' in window) {
    const provider = window.rise;
    if (provider.isRise) {
      return provider;
    }
  }
  window.open('https://risewallet.io', '_blank');
};
const response = await window.rise.connect()
console.log(respone)
//{
//  address: "0xe19578243c9744fb4b7675192ed1c489d64e2aab17bc37cc1446b6e5601d7ce8"
//  authKey: "0xe19578243c9744fb4b7675192ed1c489d64e2aab17bc37cc1446b6e5601d7ce8"
//  publicKey: "0x71c87ca87e89dd7d02d224465cc40a1aafb10a76a91a0857ddac29fe0c3cdf23"
//}

## Transaction
const payload = {
      type: 'entry_function_payload',
      function: '0x1::coin::transfer',
      type_arguments: ['0x1::aptos_coin::AptosCoin'],
      arguments: ['0x0f024fc664bfe474fd0cfe547ddea5a99b46868c2c331e9e29319b117fdb1b6a', 123123]
    };
const transaction = await window.rise.signAndSubmitTransaction(payload);
console.log(transaction)
// {
//  expiration_timestamp_secs: "1664829100"
//  gas_unit_price: "100"
//  hash: "0x12d9ceaa588b913b1da2b812c9429e010317c25d296543b3f372c55dedaf1056"
//  max_gas_amount: "379"
//  payload: {function: '0x1::coin::transfer', type_arguments: Array(1), arguments: Array(2), type: 'entry_function_payload'}
//  sender: "0xe19578243c9744fb4b7675192ed1c489d64e2aab17bc37cc1446b6e5601d7ce8"
//  sequence_number: "2"
//  signature: {public_key: '0x71c87ca87e89dd7d02d224465cc40a1aafb10a76a91a0857ddac29fe0c3cdf23', signature: '0xf378930929b7b977bbfd0d00c2c56fc128c3790270139ea9…23f2a8c06f367a6c9b88ccd3ef4aebe0966a072cf50fcf807'
// }
```



### 问题

1. approve 行为如何构造参数
2. allowance 结果如何查询
3. 交易具体参数如何构造
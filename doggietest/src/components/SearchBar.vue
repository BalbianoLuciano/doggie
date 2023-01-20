<template>
  <div>
    <div v-if="connected === false">
      <button @click="connectWallet">connect to metamask</button>
    </div>
    <input type="text" v-model="id" />
    <div v-if="(!id.length)">
      <button @click="doggiecall">Ramdom Doggie</button>
    </div>
    <div v-else>
      <button @click="doggiecall">Doggie call</button>
    </div>
  </div>
</template>

<script>
import Web3 from "web3";

export default {
  name: "SearchBar",
  data() {
    return {
      id: "",
      connected: false,
    };
  },

  methods: {
    async doggiecall() {
      if (!this.connected) {
        this.connectWallet();
      }
      let contractAddress = "0xc7df86762ba83f2a6197e1ff9bb40ae0f696b9e6";
      let abi = [
        {
          inputs: [],
          name: "baseTokenURI",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
      ];
      const web3 = new Web3(window.ethereum);
      let contract = new web3.eth.Contract(abi, contractAddress);
      let min = 1
      let max = 9999
      let ramdom = Math.floor(Math.random()*(max - min)+min)
      return await contract.methods
        .baseTokenURI()
        .call()
        .then((result) => {
          fetch(result + (this.id || ramdom))
            .then(async (res) => {
              const doggieData = await res.json();
              console.log(doggieData);
              this.$store.commit("setGlobalDoggie", doggieData);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);
        });
    },
    connectWallet() {
      let provider = window.ethereum;
      //This function connect into to any wallet
      if (typeof provider !== undefined) {
        provider
          .request({ method: "eth_requestAccounts" })
          .then((accounts) => {
            console.log(accounts);
          })
          .catch((err) => {
            console.log(err);
            return;
          });
        this.connected = true;
      }
    },
  },
  mounted() {},
};
</script>

<style scoped></style>

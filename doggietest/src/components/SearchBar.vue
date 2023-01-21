<template>
  <div>
    <input type="text" v-model="id" />
    <div v-if="!id.length">
      <button
        @click="
          doggiecall();
          connect();
        "
      >
        Ramdom Doggie
      </button>
    </div>
    <div v-else>
      <button
        @click="
          doggiecall();
          connect();
        "
      >
        Doggie call
      </button>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import Web3 from "web3";

export default {
  name: "SearchBar",
  props: ["connect"],
  data() {
    return {
      id: "",
    };
  },
  setup() {
    const store = useStore();
    let connected = computed(() => store.state.connected);
    return {
      connected,
    };
  },
  methods: {
    async doggiecall() {
      if (!this.connected) {
        this.connect();
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
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "ownerOf",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
      ];
      const web3 = new Web3(window.ethereum);
      let contract = new web3.eth.Contract(abi, contractAddress);
      let min = 1;
      let max = 9999;
      let ramdom = Math.floor(Math.random() * (max - min) + min);
      return await contract.methods
        .baseTokenURI()
        .call()
        .then(async (result) => {
          fetch(result + (this.id || ramdom))
            .then(async (res) => {
              await contract.methods
                .ownerOf(this.id || ramdom)
                .call()
                .then(async (owner) => {
                  const ownerData = owner;
                  this.$store.commit("setGlobalOwner", ownerData);
                  const doggieData = await res.json();
                  this.$store.commit("setGlobalDoggie", doggieData);
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {},
};
</script>

<style scoped></style>

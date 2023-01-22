<template>
  <div class="relative">
    <input
      v-if="screenWidth >= 640"
      type="text"
      maxlength="4"
      v-model="id"
      class="w-full focus:outline-none focus:shadow-outline-blue rounded-md py-2 px-4 block leading-5 border
      xl:py-4
      "
      placeholder="type tokenID or search ramdom doggie..."
      @keyup.enter="
        doggiecall();
        connect();
      "
    />
    <input
      v-if="screenWidth < 640"
      type="text"
      v-model="id"
      class="w-full focus:outline-none focus:shadow-outline-blue rounded-md py-2 px-4 block leading-5 border"
      placeholder="Search..."
      @keyup.enter="
        doggiecall();
        connect();
      "
    />
    <button
      v-if="!id.length"
      @click="
        doggiecall();
        connect();
      "
      class="absolute py-2 px-4 rounded-r-md bg-gray-300 top-0 right-0 bottom-0 xl:px-8"
    >
      <font-awesome-icon icon="fa-solid fa-shuffle" class="text-xl xl:text-2xl" />
    </button>
    <button
      v-else
      @click="
        doggiecall();
        connect();
      "
      class="absolute py-2 px-4 rounded-r-md bg-gray-300 top-0 right-0 bottom-0 xl:px-8"
    >
      <font-awesome-icon icon="fa-solid fa-search" class="text-xl xl:text-2xl" />
    </button>
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
      screenWidth: 0,
    };
  },
  setup() {
    const store = useStore();
    let connected = computed(() => store.state.connected);
    return {
      connected,
    };
  },
  mounted() {
    this.screenWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      this.screenWidth = window.innerWidth;
    });
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
};
</script>

<style scoped></style>

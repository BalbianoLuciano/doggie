<template>
  <div class="flex flex-col w-full  shadow lg:flex-row lg:items-center">
    <div class="flex flex-row justify-around items-center sm:justify-between sm:mx-4 sm:">
      <h1 class="p-2 text-2xl sm:text-4xl lg:m-8">The doggies</h1>
      <div
        v-if="this.connected === false"
        class="m-2 p-2 rounded-lg items-center flex flex-row border"
      >
        <button @click="connectWallet" class="hidden sm:flex">
          connect to your wallet
        </button>
        <button @click="connectWallet" class="self-center sm:hidden">
          connect
        </button>
        <font-awesome-icon icon="fa-solid fa-wallet" class="text-xl px-2"/>
      </div>
      <div v-else class="m-2 p-2 rounded-lg items-center flex flex-row border">
        {{ this.account.substr(0, 5) + "..." + this.account.substr(-5, 5) }}
      </div>
    </div>
    <div class="m-4 lg:w-2/4">
      <SearchBar v-bind:connect="connectWallet" />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import SearchBar from "./SearchBar.vue";
export default {
  name: "NavBar",
  components: {
    SearchBar,
  },
  setup() {
    const store = useStore();
    let account = computed(() => store.state.account);
    let connected = computed(() => store.state.connected);
    return {
      account,
      connected,
    };
  },
  methods: {
    connectWallet() {
      let provider = window.ethereum;
      //This function connect into to any wallet
      if (typeof provider !== undefined) {
        provider
          .request({ method: "eth_requestAccounts" })
          .then((accounts) => {
            this.$store.commit("setGlobalAccount", accounts[0]);
          })
          .catch((err) => {
            console.log(err);
            return;
          });
        this.$store.commit("setGlobalConnected", true);
      }
    },
  },
};
</script>

<style></style>

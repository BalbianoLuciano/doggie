<template>
  <div>
    <div>
      <SearchBar v-bind:connect="connectWallet"/>
    </div>
    <div v-if="this.connected === false">
      <button @click="connectWallet">connect to metamask</button>
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
    let connected = computed(() => store.state.connected);
    return {
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

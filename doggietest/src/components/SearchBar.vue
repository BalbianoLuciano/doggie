<template>
  <div>
    <button @click="executeWeb3"></button>
    <div v-if="dbURI">{{ dbURI }}</div>
  </div>
</template>

<script>
import { getOwnURL } from "../init";

export default {
  name: "SearchBar",
  data() {
    return {
      dbURI: "",
    };
  },
  methods: {
    executeWeb3: function () {
      getOwnURL()
        .then((result) => {
          this.dbURI = result
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>

</style>

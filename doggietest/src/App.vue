<template>
  <div>
    <SearchBar />
    <ShowDoggie />
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import ShowDoggie from "./components/ShowDoggie.vue"

export default {
  name: "App",
  components: {
    SearchBar,
    ShowDoggie
  },
  mounted() {
  }
};
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

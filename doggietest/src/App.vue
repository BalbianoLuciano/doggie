<template>
  <div>
    <header>
      <NavBar />
    </header>
    <div class="mx-2
        md:mx-4
        lg:mx-8
        xl:mx-16
        2xl:mx-32">
      <ShowDoggie />
    </div>
  </div>
</template>

<script>
import ShowDoggie from "./components/ShowDoggie.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    ShowDoggie,
  },
  mounted() {},
};
</script>

<style>
#app {
  font-family: poppins, sans-serif;
}
</style>

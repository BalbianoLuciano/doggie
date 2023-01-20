<template>
  <div>
    <div v-if="doggie">
      <div>
        {{ this.doggie.name }}
        {{this.doggie.description}}
      </div>
      <img :src="this.doggie.image_url" width="200">
    </div>
    <div v-else>
      <h2>Search your first Doggie</h2>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "ShowDoggie",

  setup() {
    let store = useStore();
    let doggie = computed(() => store.state.doggie);
    return {
      doggie,
    };
  },
};
</script>

<style></style>

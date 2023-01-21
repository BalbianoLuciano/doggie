<template>
  <div>
    <div v-if="doggie">
      <div>
        {{ this.doggie.name }}
      </div>
      <div v-if="owner">
        {{ this.owner }}
      </div>
      <img :src="this.doggie.image_url" width="200" />
      {{ this.doggie.description }}
    </div>
    <div v-else>
      <h2>Search your first Doggie</h2>
    </div>
    <div v-if="doggie">
      <ListOfTraits :listTraits="doggie.attributes" />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import ListOfTraits from "./ListOfTraits.vue";
export default {
  name: "ShowDoggie",
  components: {
    ListOfTraits,
  },
  setup() {
    let store = useStore();
    let doggie = computed(() => store.state.doggie);
    let owner = computed(() => store.state.owner);
    return {
      doggie,
      owner,
    };
  },
};
</script>

<style></style>

<template>
  <div class="bg-white p-4 border my-4 rounded-md">
    <div v-if="doggie">
      <div class="text-3xl my-4">
        {{ this.doggie.name }}
      </div>
      <img :src="this.doggie.image_url" class="w-full rounded-md" />
      <div class="relative">
        <button
          class="w-full inline-block text-left border py-2 px-4 mt-4 rounded-md font-semibold"
          @click="toggleMenu"
        >
          Details:
        </button>
        <div
          v-if="isOpen"
          class="w-full transition-all duration-200 border border-t-0 rounded-md p-2"
        >
          <div class="flex flex-row justify-between">
            <label class="font-semibold text-gray-400">Contract Address:</label>
            <div v-if="owner" class="self-right">
              0xc7df8676...
            </div>
          </div>
          <div class="flex flex-row justify-between">
            <label class="font-semibold text-gray-400">Owner:</label>
            <div v-if="owner" class="self-right">
              {{ this.owner.substr(0, 10) + "..." }}
            </div>
          </div>
          <div class="flex justify-between">
            <label class="font-semibold text-gray-400">Token ID:</label>
            {{ this.doggie.name.replace(/[^0-9]+/g, "") }}
          </div>
        </div>
      </div>
      <div class="relative">
        <button
          @click="toggleMenuTwo"
          class="w-full inline-block text-left border py-2 px-4 rounded-md font-semibold"
        >
          Description:
        </button>
        <div v-if="isOpenTwo" class="text-gray-400 p-4 border border-t-0 rounded-md">
          {{ this.doggie.description }}
        </div>
      </div>
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
  data() {
    return {
      isOpen: false,
      isOpenTwo: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    toggleMenuTwo() {
      this.isOpenTwo = !this.isOpenTwo;
    },
  },
};
</script>

<style></style>

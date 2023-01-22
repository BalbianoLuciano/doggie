<template>
  <div class="bg-white p-4 border my-4 rounded-md xl:rounded-xl">
    <div v-if="doggie">
      <div class="text-3xl my-4">
        {{ this.doggie.name }}
      </div>
      <div class="lg:flex lg:flex-row">
        <img :src="this.doggie.image_url" class="w-full rounded-md lg:w-2/4 xl:rounded-xl"/>
        <div class="lg:flex lg:flex-col lg:w-2/4 lg:pl-4 lg:text-lg ">
          <div class="relative">
            <button
              class="w-full inline-block text-left border py-2 px-4 mt-4 rounded-md font-semibold lg:mt-0"
              @click="toggleMenu"
            >
              Details:
            </button>
            <div
              v-if="isOpen"
              class="w-full transition-all duration-200 border border-t-0 rounded-md p-2 lg:p-4"
            >
              <div class="flex flex-row justify-between">
                <label class="font-semibold text-gray-400"
                  >Contract Address:</label
                >
                <div v-if="owner" class="self-right">0xc7df8676...</div>
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
          <div class="relative lg:text-lg">
            <button
              @click="toggleMenuTwo"
              class="w-full inline-block text-left border py-2 px-4 rounded-md font-semibold lg:mt-0"
            >
              Description:
            </button>
            <div
              v-if="isOpenTwo"
              class="text-gray-400 p-4 border border-t-0 rounded-md lg:text-lg"
            >
              {{ this.doggie.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex flex-col w-full h-screen justify-center items-center text-2xl">
      <iframe src="https://www.sandbox.game/model-viewer-light/?assetId=95f8d431-b573-440e-b52f-5c14e18841e5" frameborder="0" class="hidden"></iframe>
      <h2>Search Your first doggie</h2>
      <img src="../assets/withoutBG.png" alt="doggie">
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
      screenWidth: 0,
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
  mounted() {
    this.screenWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      this.screenWidth = window.innerWidth;
    });
    if (this.screenWidth >= 1024) {
      this.isOpen = true;
      this.isOpenTwo = true;
    }
  },
};
</script>

<style></style>

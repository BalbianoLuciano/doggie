<template>
  <div class="mt-4 rounded border">
    <table class="w-full">
      <tr>
        <th class="p-2">Trait</th>
        <th class="p-2">Value</th>
      </tr>
      <tr v-for="(trait, index) in listTraits" :key="index" class="border">
        <td class="p-2">
          {{ trait.trait_type }}
        </td>
        <div>
          <td v-if="trait.value" class="p-2 text-center">
            {{ trait.value }}
          </td>
          <td v-else class="p-2 text-center">
            empty
          </td>
        </div>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ListOfTraits",
  props: ["listTraits"],
};
</script>

<style></style>

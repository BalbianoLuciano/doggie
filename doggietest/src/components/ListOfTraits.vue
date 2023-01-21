<template>
  <div>
    <table>
      <tr>
        <th>Trait</th>
        <th>Value</th>
      </tr>
      <tr v-for="(trait, index) in listTraits" :key="index">
        <td>
          {{ trait.trait_type }}
        </td>
        <div>
          <td v-if="trait.value">
            {{ trait.value }}
          </td>
          <td v-else>
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

<template>
  <v-row>
    <v-col cols="12">
      <div v-if="condition"><v-text-field color="success" loading disabled></v-text-field></div>
      <div v-if="!condition">
        
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Loading",
  props: {
    condition: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style>
</style>
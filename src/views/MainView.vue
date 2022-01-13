<template>
  <RouterLink :to="{ name: 'posts' }"> Show all posts </RouterLink>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
</style>

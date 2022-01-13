<template>
  <h1>{{ post.title }}</h1>
  <p>{{ post.body }}</p>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { PostData } from "@/types";
export default defineComponent({
  name: "Post",
  props: {
    post: {
      type: Object as PropType<PostData>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

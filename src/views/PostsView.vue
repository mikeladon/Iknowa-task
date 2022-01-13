<template>
  <div v-for="post in posts" :key="post.id">
    <Post :post="post" />
    <RouterLink
      :to="{ name: 'post', params: { user: USER_ID, post: post.id } }"
    >
      Show more
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { PostData } from "@/types";
import Post from "@/components/Post.vue";
import { USER_ID } from "@/consts";
import api from "@/api/requests/posts";

export default defineComponent({
  name: "PostsView",
  components: {
    Post,
  },
  setup() {
    const posts = ref<PostData[]>([]);

    onMounted(async () => {
      posts.value = await api.get(USER_ID);
    });
    return { posts, USER_ID };
  },
});
</script>

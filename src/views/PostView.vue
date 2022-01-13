<template>
  <div v-if="post">
    <Post :post="post" />
    <button @click="showComments">Show comments</button>
    <button @click="addComment">Add a comment</button>
  </div>
  <div v-if="comments">
    <div v-for="comment in comments" :key="comment.id">
      <p>User: {{ comment.email }}</p>
      <p>Comment title: {{ comment.name }}</p>
      <p>Text: {{ comment.body }}</p>
    </div>
  </div>
  <form @submit.prevent="postComment" v-if="showNewCommentForm" class="form">
    <input type="text" v-model="newComment.title" placeholder="title" />
    <textarea v-model="newComment.text" placeholder="text" />
    <button>Submit new comment</button>
  </form>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import api from "@/api/requests/posts";
import commentsApi from "@/api/requests/comments";
import { CommentData, PostData, NewComment } from "@/types";
import Post from "@/components/Post.vue";

export default defineComponent({
  components: {
    Post,
  },
  setup() {
    const { currentRoute } = useRouter();
    const userId = computed(() => currentRoute.value?.params?.user);
    const postId = computed(() => currentRoute.value?.params?.post);
    const post = ref<PostData | null>(null);
    const comments = ref<CommentData[] | null>(null);
    const showNewCommentForm = ref(false);
    const newComment = ref<NewComment>({
      title: "",
      text: "",
    });

    async function showComments() {
      comments.value = await commentsApi.get(Number(postId.value));
    }

    onMounted(async () => {
      if (userId.value && postId.value) {
        post.value = await api.getSinglePost(
          Number(userId.value),
          Number(postId.value)
        );
      }
    });

    function addComment() {
      comments.value = null;
      showNewCommentForm.value = true;
    }

    async function postComment() {
      if (!newComment.value.title || !newComment.value.text) return;
      const data = {
        postId: Number(postId.value),
        id: Math.floor(100 + Math.random() * (1000 + 1 - 100)),
        name: newComment.value.title,
        email: "test@test.com",
        body: newComment.value.text,
      };
      commentsApi.store(data);
      showNewCommentForm.value = false;
      comments.value = await commentsApi.get(Number(postId.value));
    }

    return {
      showComments,
      addComment,
      post,
      comments,
      newComment,
      postComment,
      showNewCommentForm,
    };
  },
});
</script>

<style scoped>
.form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
}
</style>

<template>
  <div v-if="status === 'authenticated'">
    <LazyBlogCommentsCard v-if="publishedComment" :post="post" :comment="publishedComment" />
    <form @submit.prevent="createComment" v-else>
      <textarea v-model="newComment.content" class="block w-full p-2 m-0 mb-0 border rounded" placeholder="Write a comment"></textarea>
      <button type="submit" class="bg-gray-800 text-gray-100 px-3 py-1 m-0 rounded-b-lg ms-7 shadow dark:bg-zinc-100 dark:text-gray-800">
        <i class="mdi mdi-send"></i>
        Send reply
      </button>
    </form>
  </div>
  <div v-else>
    <button @click="signIn('google')" class="mx-auto bg-blue-500 hover:bg-blue-400 text-white font-bold my-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full flex">
      <span class="p-2">
        <i class="mdi mdi-google"></i>
        Ingresa con Google para dejar un comentario
      </span>
    </button>
  </div>
</template>
<script setup lang="ts">
const { status, data, signIn } = useAuth()
const props = defineProps<{
  post: Post,
  parent_id: string | undefined
}>()
const newComment = ref({
  parent_id: props.parent_id,
  content: ''
})

const publishedComment = ref<Comment | null>(null)

const createComment = () => {
  $fetch(`/api/appi/posts/${props.post.slug}/comments`, {
    method: 'POST',
    body: JSON.stringify(newComment.value),
  }).then((comment) => {
    publishedComment.value = comment as Comment
  })
  newComment.value = { parent_id: '', content: '' }
}
</script>
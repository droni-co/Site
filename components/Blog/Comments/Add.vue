<template>
  <div v-if="status === 'authenticated'">
    <LazyBlogCommentsCard v-if="publishedComment" :post="post" :comment="publishedComment" />
    <form @submit.prevent="createComment" v-else>
      <textarea v-model="newComment.content" class="block w-full p-2 m-0 mb-0 border rounded" placeholder="Write a comment"></textarea>
      <button type="submit" class="bg-gray-800 text-gray-100 px-3 py-1 m-0 rounded-b-lg ms-7 shadow">
        <i class="i-mdi-send"></i>
        Send reply
      </button>
    </form>
  </div>
  <div v-else>
    <button @click="signIn('google')" class="mx-auto bg-blue-500 hover:bg-blue-400 text-white font-bold my-1 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full flex">
      <i class="i-mdi-google mt-3"></i>
      <span class="p-2">
        Login with Google for commenting
      </span>
    </button>
  </div>
</template>
<script setup lang="ts">
const { status, data, signIn } = useAuth()
const props = defineProps<{
  post: Post,
  parentId: number
}>()
const newComment = ref({
  parentId: props.parentId,
  content: ''
})

const publishedComment = ref<Comment | null>(null)

const createComment = () => {
  $fetch(`/api/appi/posts/${props.post.slug}/comments`, {
    method: 'POST',
    body: JSON.stringify(newComment.value),
  }).then((comment:Comment) => {
    publishedComment.value = comment
  })
  newComment.value = { parentId: 0, content: '' }
}
</script>
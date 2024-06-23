<template>
  <div class="my-2 bg-zinc-100 rounded p-3 shadow" :class="{ 'opacity-50': commentDeleted }">
    <div class="flex items-center">
      <LazyUserChip :user="comment.user" v-if="comment.user" />
      <p class="ml-2 text-xs text-gray-500 grow">
        {{ commentCreatedAt }}
      </p>
      <button @click="destroyComment(comment)" class="text-rose-300" v-if="!commentDeleted">
        <i class="i-mdi-delete"></i>
      </button>
      <div class="text-rose-300" v-else>
        Deleted
      </div>
    </div>
    <p class="text-gray-500 dark:text-gray-400 px-7">{{ comment.content }}</p>
    <div class="px-7">
      <LazyBlogCommentsCard v-for="child in comment.children" :key="child.id" :post="post" :comment="child" />
      <LazyBlogCommentsAdd :post="post" :parent-id="comment.id" v-if="comment.parentId === 0 && showForm" />
      <button @click="showForm = !showForm" class="btn btn-sm mt-2" v-if="comment.parentId === 0 && !showForm && !commentDeleted">
        <i class="i-mdi-reply"></i> 
        Reply
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  post: Post,
  comment: Comment
}>()

const showForm = ref(false)
const commentDeleted = ref(false)

const commentCreatedAt = computed(() => {
  return new Date(props.comment.createdAt).toLocaleString()
})

const destroyComment = (comment:Comment) => {
  $fetch(`/api/appi/posts/${props.post.slug}/comments/${comment.id}`, {
    method: 'DELETE'
  }).then(() => {
    commentDeleted.value = true
  })
}
</script>
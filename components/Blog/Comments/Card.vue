<template>
  <div class="my-2 bg-zinc-100 rounded p-3 shadow" :class="{ 'opacity-50': commentDeleted }">
    <div class="flex items-center">
      <LazyUserChip :user="props.comment.user" v-if="comment.user" />
      <p class="ml-2 text-xs text-gray-500 grow">
        {{ commentcreated_at }}
      </p>
      <button @click="destroyComment(comment)" class="text-rose-300" v-if="!commentDeleted">
        <i class="mdi mdi-delete"></i>
      </button>
      <div class="text-rose-300" v-else>
        Deleted
      </div>
    </div>
    <p class="text-gray-500 dark:text-gray-600 px-7">{{ comment.content }}</p>
    <div class="px-7">
      <LazyBlogCommentsCard v-for="child in comment.children" :key="child.id" :post="post" :comment="child" />
      <LazyBlogCommentsAdd :post="post" :parent_id="comment.id" v-if="comment.parent_id === '' && showForm" />
      <button @click="showForm = !showForm" class="btn btn-sm mt-2 dark:text-zinc-500" v-if="comment.parent_id === '' && !showForm && !commentDeleted">
        <i class="mdi mdi-reply"></i> 
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

const commentcreated_at = computed(() => {
  return new Date(props.comment.created_at).toLocaleString()
})

const destroyComment = (comment:Comment) => {
  $fetch(`/api/appi/posts/${props.post.slug}/comments/${comment.id}`, {
    method: 'DELETE'
  }).then(() => {
    commentDeleted.value = true
  })
}
</script>
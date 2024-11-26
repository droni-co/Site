<template>
  <div>
    <LazyBlogCommentsCard
      v-for="comment in comments.data"
      :key="comment.id"
      :post="post"
      :comment="comment"
    />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  post: Post
}>()
const comments = await $fetch<Pagination<Comment[]>>(`/api/appi/posts/${props.post.slug}/comments`)

</script>
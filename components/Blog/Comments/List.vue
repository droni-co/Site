<template>
  <div>
    <LazyBlogCommentsCard
      v-for="comment in comments"
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
const { data:comments } = useFetch<Comment[]>(`/api/appi/posts/${props.post.slug}/comments`)

</script>
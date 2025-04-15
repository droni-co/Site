<template>
  <div class="flex">
    <textarea
      v-model="newComment.content"
      class="block w-full p-2 m-0 mb-0 border rounded rounded-l-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-zinc-800 text-slate-900 dark:text-slate-300 focus:outline-none min-h-[50px] max-h-[200px]"
      placeholder="Puedes usar formato markdown..." />
    <UiButton
      class="rounded-l-none"
      @click="createComment">
      <i class="mdi mdi-send" />
    </UiButton>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  commentable: 'content_post' | 'codevs_challenge' | 'codevs_submission',
  commentableId: number,
  parentId: number | null
}>()

const content = ref<string>('')

const newComment = ref<{
  commentable: 'content_post' | 'codevs_challenge' | 'codevs_submission',
  commentable_id: number,
  parent_id: number | null,
  content: string
}>({
  commentable: props.commentable,
  commentable_id: props.commentableId,
  parent_id: props.parentId ?? null,
  content: ''
})

const createComment = () => {
  $fetch(`/api/appi/social/comments`, {
    method: 'POST',
    body: newComment.value,
  }).then((comment) => {
    console.log(comment)
    content.value = ''
    newComment.value.parent_id = null
    newComment.value.content = ''
  }).catch((error) => {
    console.error(error)
  })
}

</script>
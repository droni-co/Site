<template>
  <div class="flex h-screen">
    <div class="grow">
      <iframe
        class="w-full aspect-video"
        title="dronico"
        src="https://player.twitch.tv/?channel=dronico&parent=droni.co"
        allowfullscreen="true"></iframe>
    </div>
    <div>
      <iframe
        class="w-full h-full"
        title="chat"
        id="chat_embed"
        src="https://www.twitch.tv/embed/dronico/chat?parent=droni.co"">
      </iframe>
    </div>
  </div>
</template>
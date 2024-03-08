export default defineEventHandler(async (event) => {
  const urlObj = getRequestURL(event)
  if(urlObj.pathname.startsWith('/es/posts/')) {
    await sendRedirect(event, urlObj.pathname.replace("/es/posts/", '/es/blog/2024/'), 301)
  }
})
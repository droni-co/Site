export default defineEventHandler(async (event) => {
  const urlObj = getRequestURL(event)
  const host = event.node.req.headers.host
  if(urlObj.pathname.startsWith('/es/posts/')) {
    await sendRedirect(event, urlObj.pathname.replace("/es/posts/", '/es/blog/'), 301)
  }
  if(urlObj.pathname.startsWith('/en/posts/')) {
    await sendRedirect(event, urlObj.pathname.replace("/en/posts/", '/es/blog/'), 301)
  }

  // remove www
  if (host?.startsWith('www.')) {
    await sendRedirect(event, `https://${host.replace('www.', '')}${urlObj.pathname}${urlObj.search}`, 301)
  }
})
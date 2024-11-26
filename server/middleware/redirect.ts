export default defineEventHandler(async (event) => {
  const urlObj = getRequestURL(event)
  const host = event.node.req.headers.host
  if(
    urlObj.pathname.startsWith('/es/posts/') ||
    urlObj.pathname.startsWith('/en/posts/') ||
    urlObj.pathname.startsWith('/es/blog/') ||
    urlObj.pathname.startsWith('/en/blog/')
  ) {
    const newPath = urlObj.pathname
      .replace('/es/posts/', '/blog/')
      .replace('/en/posts/', '/blog/')
      .replace('/es/blog/', '/blog/')
      .replace('/en/blog/', '/blog/')
    await sendRedirect(event, newPath, 301)
  }

  // remove www
  if (host?.startsWith('www.')) {
    await sendRedirect(event, `https://${host.replace('www.', '')}${urlObj.pathname}${urlObj.search}`, 301)
  }
})
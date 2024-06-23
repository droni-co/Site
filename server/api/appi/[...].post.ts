import { getToken } from '#auth'

export default defineEventHandler(async (event) => {
  const token = await getToken({event})
  const appiToken = token?.accessToken as AppiToken
  const endpoint = String(event.node.req.url).replace('/api/appi', '')
  const body = await readBody(event)
  
  const res = await $fetch(`${process.env.APPI}/${process.env.APPI_SITE_ID}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${appiToken?.token ?? ''}`,
      'Key': String(process.env.APPI_SITE_KEY)
    },
    body: body
  })
  return res
})
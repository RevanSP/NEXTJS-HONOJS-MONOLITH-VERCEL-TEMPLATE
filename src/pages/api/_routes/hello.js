import { Hono } from 'hono'

const hello = new Hono()

hello.get('/', (c) => {
  return c.json({ message: 'Hello from Hono modular route!' })
})

export default hello
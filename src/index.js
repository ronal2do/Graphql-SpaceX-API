import 'babel-polyfill'

import { GraphQLServer } from 'graphql-yoga'
import { connectDatabase } from './database'
import { typeDefs } from './typeDefs'
import resolvers from './resolvers'
;(async () => {
  try {
    const info = await connectDatabase()
    console.log(`Connected to ${info.host}:${info.port}`)
  } catch (error) {
    console.error('Unable to connect to database')
    process.exit(1)
  }

  const server = new GraphQLServer({
    typeDefs,
    resolvers
  })

  server.start({ cacheControl: true }, () =>
    console.log('Server is running on localhost:4000')
  )
})()

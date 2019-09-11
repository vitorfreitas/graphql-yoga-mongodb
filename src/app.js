require('dotenv').config({
  path: '.env'
})

const { GraphQLServer, PubSub } = require('graphql-yoga')
const { typeDefs, resolvers } = require('./resources')
const { setupMongodb } = require('./database')

setupMongodb()

const pubsub = new PubSub()
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } })

module.exports = server

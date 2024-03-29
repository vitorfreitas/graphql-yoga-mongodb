require('dotenv').config({
  path: '.env'
})

const morgan = require('morgan')
const { GraphQLServer, PubSub } = require('graphql-yoga')
const { typeDefs, resolvers } = require('./resources')
const { setupMongodb } = require('./database')
const { populateDb } = require('./seeds')

setupMongodb()
populateDb()

const pubsub = new PubSub()
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } })

server.use(morgan('combined'))

module.exports = server

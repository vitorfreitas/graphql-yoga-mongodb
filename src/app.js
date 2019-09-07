require('dotenv').config({
  path: '.env'
})

const { GraphQLServer } = require('graphql-yoga')
const { typeDefs, resolvers } = require('./resources')
const { setupMongodb } = require('./database')

setupMongodb()
const server = new GraphQLServer({ typeDefs, resolvers })

module.exports = server

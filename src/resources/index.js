const path = require('path')
const { fileLoader, mergeTypes } = require('merge-graphql-schemas')

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'))
const typeDefs = mergeTypes(typesArray)

const resolvers = fileLoader(path.join(__dirname, './**/resolvers.*'))

module.exports = { typeDefs, resolvers }

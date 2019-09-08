const User = require('./model')

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find({})
      return users
    }
  },
  Mutation: {
    createUser: async (_, { user }) => {
      const newUser = await User.create(user)
      return newUser._id
    },
    followUser: async (_, { id, user }) => {
      await User.findByIdAndUpdate(id, { $push: { following: user } })
      return id
    }
  }
}

module.exports = resolvers

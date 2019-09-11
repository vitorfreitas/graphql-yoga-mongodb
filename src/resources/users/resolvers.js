const User = require('./model')
const CHANNEL_NAME = 'CHANNEL_NAME'

const resolvers = {
  Query: {
    user: async (_, { id }) => await User.findById(id),
    users: async () => await User.find({})
  },
  Mutation: {
    createUser: async (_, { user }) => await User.create(user),
    followUser: async (_, { id, user }, { pubsub }) => {
      await User.findByIdAndUpdate(id, {
        $push: { following: user }
      })

      pubsub.publish(CHANNEL_NAME, { userFollowed: await User.find({}) })
      return id
    }
  },
  Subscription: {
    userFollowed: {
      subscribe: (parent, args, { pubsub }) => {
        return pubsub.asyncIterator(CHANNEL_NAME)
      }
    }
  }
}

module.exports = resolvers

const faker = require('faker')
const User = require('./resources/users/model')

const fakeData = [
  {
    name: faker.name.findName(),
    email: faker.internet.email(),
    age: faker.random.number()
  },
  {
    name: faker.name.findName(),
    email: faker.internet.email(),
    age: faker.random.number()
  },
  {
    name: faker.name.findName(),
    email: faker.internet.email(),
    age: faker.random.number()
  }
]

async function populateDb() {
  const users = await User.find({})
  const alreadyPopulated = users.length > 0

  if (alreadyPopulated) return

  return fakeData.forEach(user => {
    User.create(user)
  })
}

module.exports = { populateDb }

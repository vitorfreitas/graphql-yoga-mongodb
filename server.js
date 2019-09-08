const app = require('./src/app')
const PORT = process.env.PORT

const opts = {
  port: PORT
}

app.start(opts, () => console.log(`Listening on port ${PORT}`))

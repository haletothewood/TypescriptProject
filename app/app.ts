import express from 'express'
import http from 'http'
import { applyMiddleware, applyRoutes } from './utils'
import routes from './services'
import middleware from './middleware'
import errorHandlers from './middleware/errorHandlers'

process.on('uncaughtException', error => {
  console.log(error)
  process.exit(1)
})

process.on('unhandledRejection', error => {
  console.log(error)
  process.exit(1)
})

const router: express.Application = express()
applyMiddleware(middleware, router)
applyRoutes(routes, router)
applyMiddleware(errorHandlers, router)
const server: http.Server = http.createServer(router)

const { PORT = 3000 } = process.env

server.listen(3000, function () {
  console.log(`Server is running http://localhost:${PORT}...`)
})

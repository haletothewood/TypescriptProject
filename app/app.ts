import express from 'express'
import http from 'http'
import { applyMiddleware } from "./utils";
import middleware from "./middleware";

const router: express.Application = express()
applyMiddleware(middleware, router);
const server: http.Server = http.createServer(router)

const { PORT = 3000 } = process.env

server.listen(3000, function () {
  console.log(`Server is running http://localhost:${PORT}...`)
})

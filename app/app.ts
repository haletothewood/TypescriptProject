import express from 'express'
import http from 'http'

const router: express.Application = express();
const server: http.Server = http.createServer(router);
const { PORT = 3000 } = process.env;

server.listen(3000, function () {
  console.log(`Server is running http://localhost:${PORT}...`);
});

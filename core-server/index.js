const router = require('koa-trie-router')
const koa = require('koa')

const server = koa()
server.use(router(server))

module.exports = server

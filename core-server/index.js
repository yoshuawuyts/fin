const router = require('koa-trie-router')
const logger = require('koa-logger')
const koa = require('koa')

const server = koa()

module.exports = server

// middleware
server.use(logger())
server.use(router(server))

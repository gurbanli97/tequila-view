const { Nuxt } = require('nuxt-start')

const nuxtConfig = require('../nuxt.config.js')
const nuxt = new Nuxt({ ...nuxtConfig, dev: false })

exports.handler = async function (event, context) {
  const { html, error, redirected } = await nuxt.renderRoute(event.path, {
    req: event,
    res: {
      setHeader: () => {}
    }
  })

  if (error) {
    return {
      statusCode: 500,
      body: error.message
    }
  }

  if (redirected) {
    return {
      statusCode: 301,
      headers: {
        Location: redirected.path
      }
    }
  }

  return {
    statusCode: 200,
    body: html,
    headers: {
      'Content-Type': 'text/html'
    }
  }
}
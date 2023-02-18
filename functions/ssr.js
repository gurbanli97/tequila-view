const { loadNuxt } = require('nuxt-start');

exports.handler = async (event, context) => {
  const nuxt = await loadNuxt({ rootDir: './dist' });

  const { html, error, redirected } = await nuxt.renderRoute(event.path, {
    req: event,
    res: {
      setHeader: () => {},
      writeHead: () => {},
      write: () => {},
      end: () => {},
    },
  });

  return {
    statusCode: error ? 500 : redirected ? 301 : 200,
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'public, max-age=3600',
    },
    body: html,
  };
};
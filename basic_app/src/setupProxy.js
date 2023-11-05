const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',  // The API endpoint you want to proxy
    createProxyMiddleware({
      target: 'http://api.adviceslip.com',
      changeOrigin: true,
    })
  );
};
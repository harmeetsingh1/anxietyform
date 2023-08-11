const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Change this to match your API endpoint
    createProxyMiddleware({
      target: 'http://api.positivemindcare.com/api/v1/user/', // Change this to your Django backend's URL
      changeOrigin: true,
    })
  );
};

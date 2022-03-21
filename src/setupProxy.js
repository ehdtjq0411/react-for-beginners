const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: "https://api.coinpaprika.com/v1/tickers",
            changeOrigin: true,
            pathRewrite: {
                '^/api': '' // 하위 url 초기화
            }

        })
    );
};
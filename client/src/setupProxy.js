const createProxyMiddleware = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/register", "/register/*"], //routes the proxy is looking for
    createProxyMiddleware({
      target: "http://localhost:3001", // proxy will serve data to target
    })
  );
};

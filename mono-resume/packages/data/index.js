/**
 * START SERVER
 */

/* eslint-disable */
 
const find = require('find-up');
const DATA = require("./database/index");
const jsonServer = require('json-server');
const app = jsonServer.create();
const router = jsonServer.router(DATA);
const middlewares = jsonServer.defaults();
const fs = require('fs');
const path = require('path');
const https = require('https');

const findEnv = () => {
  return find.sync(process.env.ENV_FILE || '.env'); 
};

require('dotenv').config({path: findEnv()});
const {environment} = require('./environment/environment')

const PORT =environment.DATA_PORT;
const HOST = environment.PRIVATE_HOST;
 
app.use(middlewares);
app.use(router);

if (environment.production) {
  const certificate = fs.readFileSync(path.join(process.cwd(), "ssl/cert.pem"), "utf8");
  const keys = fs.readFileSync(path.join(process.cwd(), "ssl/privkey.pem"), "utf8");
  https
    .createServer(
      {
        key: keys,
        cert: certificate,
      },
      app,
    )
    .listen(PORT, null, () => {
      console.info(`HTTPS Express server running on port %s at %s 🎉`, PORT, null);
    });
} else {
  app.listen(PORT, HOST, function () {
    console.info(`HTTPS Express server running on port http://${HOST}:${PORT} 🎉`);
  });
}
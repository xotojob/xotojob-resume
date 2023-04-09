/* eslint-disable */

var find = require('find-up');
var path = require('path');
var express = require('express');
var app = express();

const fs = require('fs');
const https = require('https');

const findEnv = () => {return find.sync(process.env.ENV_FILE || '.env'); };

require('dotenv').config({path: findEnv()});

const {environment} = require('./environment/environment');
const PORT = environment.PAGE_PORT;
const HOST = environment.PRIVATE_HOST;

app.get('/', (req, res) => {res.sendFile(path.join(`${__dirname  }/index.html`));});
app.use(express.static(`${__dirname  }/`)); 

if (environment.production) {
  const certificate = fs.readFileSync(path.join(process.cwd(), "ssl/cert.pem"), "utf8");
  const keys = fs.readFileSync(path.join(process.cwd(), "ssl/privkey.pem"), "utf8");
  https.createServer({key: keys,cert: certificate,},app,).listen(PORT, null, () => {console.info(`HTTPS Express server running on port http://${HOST}:${PORT} 🎉`);});
} else {
  app.listen(PORT, HOST, function () {console.info(`HTTPS Express server running on port http://${HOST}:${PORT} 🎉`);});
}


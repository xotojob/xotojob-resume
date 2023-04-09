
/* eslint-disable */

const express = require("express");
const compression = require("compression");
const {environment} = require('./src/environments/environment');

const  find = require('find-up');

function findEnv() {
	return find.sync(process.env.ENV_FILE || '.env'); 
};

require('dotenv').config({path: findEnv()});

const PORT = environment.RESUME_PORT;
const HOST =  environment.PRIVATE_HOST;
const appFolder = 'dist/angular-translate-app';

const app = express();
app.use(compression());

app.get('*.*', express.static(appFolder));

app.all('*', (req, res) => {
  res.status(200).sendFile(`/`, {
    root: appFolder
  });
});

if (environment.production) {
  const certificate = fs.readFileSync(path.join(process.cwd(), "ssl/cert.pem"), "utf8");
  const keys = fs.readFileSync(path.join(process.cwd(), "ssl/privkey.pem"), "utf8");
  https.createServer({key: keys,cert: certificate,},app,).listen(PORT, null, () => {console.info(`HTTPS Express server running on port http://${HOST}:${PORT} 🎉`);});
} else {
  app.listen(PORT, HOST, function () {console.info(`HTTPS Express server running on port http://${HOST}:${PORT} 🎉`)});
}
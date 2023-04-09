/* eslint-disable */

const environment = {
	production: process.env.NODE_ENV === "production",
	HOST: process.env.NODE_ENV === "production" ? "xotopio.com" : "localhost",
	PRIVATE_HOST: process.env.NODE_ENV === "production" ? process.env.MAIN_HOST : process.env.LOCAL_HOST,
	LETTER_PORT: process.env.LETTER_PORT,
	PROTOCOl: process.env.NODE_ENV === "production" ? "https" : "http",
	baseUrl(port) {
		return this.PROTOCOl + "://" + this.LETTER_PORT + ":" + port
	},
};

environment.production ? console.info(`Env is set to production`) : console.info(`Env is set to development`);

module.exports = {environment};
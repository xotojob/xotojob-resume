/* eslint-disable */

const environment = {
	production: process.env.NODE_ENV === "production",
	HOST: process.env.NODE_ENV === "production" ? "xotopio.com" : "localhost",
	PRIVATE_HOST: process.env.NODE_ENV === "production" ? process.env.MAIN_HOST : process.env.LOCAL_HOST,
	PAGE_PORT: process.env.PAGE_PORT,
	RESUME_PORT: process.env.RESUME_PORT,
	LETTER_PORT: process.env.LETTER_PORT,
	DATA_PORT: process.env.DATA_PORT,
	PROTOCOl: process.env.NODE_ENV === "production" ? "https" : "http",
	baseUrl(port) {
		return this.PROTOCOl + "://" + this.RESUME_PORT + ":" + port
	},
};

environment.production ? console.info(`Env is set to production`) : console.info(`Env is set to development`);
module.exports = {environment};
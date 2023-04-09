// Move to Directives

import { environment } from "src/environments/environment";

export const utilities = {
	capitalize(s: string) {
		
		if (typeof s !== "string") return "";
		return s.charAt(0).toUpperCase() + s.slice(1);
	},
};

/** 
 * loadJSON
 */

const dataPort = 3000;
const baseDataUrl = `${window.location.protocol}//${window.location.hostname}:${dataPort}`;

export async function loadJSON(items) {
	return new Promise(resolve => {
		return getJSON(`${baseDataUrl}/${items}`, function (_err, resume) {
		// return getJSON(`${environment.baseUrl(environment.DATA_PORT)}/${items}`, function (_err, resume) {
			return resolve({...resume})
		})
	})
}

function getJSON(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = 'json';
	xhr.onload = function () {
		var status = xhr.status;
		if (status == 200) {
			callback(null, xhr.response);
		} else {
			callback(status);
		}
	};
	xhr.send();
};

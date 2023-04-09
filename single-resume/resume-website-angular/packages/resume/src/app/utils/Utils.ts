
import { environment } from "src/environments/environment";

const dataPort = 3000;
const baseDataUrl = `${window.location.protocol}//${window.location.hostname}:${dataPort}`;

export const utilities = {
	capitalize(s: string) {
		if (typeof s !== "string") return "";
		return s.charAt(0).toUpperCase() + s.slice(1);
	},
};

export async function loadJSON(items) {
	return new Promise(resolve => {
		return getJSON(`${baseDataUrl}/${items}`, function (_err, resume) {
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
		status == 200 ? callback(null, xhr.response) : 	callback(status);
	};
	xhr.send();
};

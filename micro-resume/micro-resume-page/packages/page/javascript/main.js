/* eslint-disable */

/*
 :'######::'########::::'###::::'########::'########:'########:'########::
 '##... ##:... ##..::::'## ##::: ##.... ##:... ##..:: ##.....:: ##.... ##:
  ##:::..::::: ##:::::'##:. ##:: ##:::: ##:::: ##:::: ##::::::: ##:::: ##:
 . ######::::: ##::::'##:::. ##: ########::::: ##:::: ######::: ########::
 :..... ##:::: ##:::: #########: ##.. ##:::::: ##:::: ##...:::: ##.. ##:::
 '##::: ##:::: ##:::: ##.... ##: ##::. ##::::: ##:::: ##::::::: ##::. ##::
 . ######::::: ##:::: ##:::: ##: ##:::. ##:::: ##:::: ########: ##:::. ##:
 :......::::::..:::::..:::::..::..:::::..:::::..:::::........::..:::::..::
*/

const dataPort = 3000;
const baseDataUrl = `${window.location.protocol}//${window.location.hostname}:${dataPort}`;
const language = "fr"

window.addEventListener("load", () => {
	loadConfig().then((config) => {
		loadLetter().then((letter) => {
			loadResume().then((resume) => {
				
				DATA = {...resume, ...letter, ...config}
				
				document.title = `${DATA.config.contact.resumeName}`;
				DATA.info = { appVersion: '2.0', version: DATA.config.version };
				
				EventBus = new Vue();

				Resume = new Vue({
					el: '#root',
					methods: {
						initials: function () {
							let name = this.applicant.split(' ');
							return name[0][0] + name[1][0];
						}
					},
					
					data: () => {
						return {data: DATA}
					},
					
					mounted: function () {
						setColors();
						setTypewriter();
					},
					
					created() {
						let load_delay = 0;
						setTimeout(() => { document.querySelectorAll('.page').forEach((e) => { e.classList.add('loaded'); }); }, load_delay);
						EventBus.$on('resume-data', (data) => { this.data = data; });
					}
				});

				DropTarget = new Vue({ 
					el: '#drop-target', 
					data: { visible: true, selectedLanguage: language },			
					methods: {
						async changeResumeLanguage() {
							const newData = await loadResume(this.selectedLanguage)
							EventBus.$emit('resume-data', newData);
						}
					}, 
				});
			});
		});
	});
}, false);

function setColors() {
	let colors_light = ["rgba(0,113,156, 0.3)"];
	let colors_main = ["rgba(0,113,156, 0.7)"];

	const number = Math.floor(Math.random() * colors_main.length);

	function getColor_light(number) { return colors_light[number]; }
	function getColor_main(number) { return colors_main[number]; }

	document.documentElement.style.setProperty('--main-color-lighter', getColor_light(number));
	document.documentElement.style.setProperty('--main-color', getColor_main(number));

}

function setTypewriter() {

	let typewriter_delay = 700;
	let dataText = DATA.config.contact.scroll;
	let typewriter_element = document.getElementById("typewriter");

	typewriter_element.style.opacity = 1;


	setTimeout(() => {
		function typeWriter(text, i, fnCallback) {
			if (i < text.length) {
				typewriter_element.innerHTML = `${text.substring(0, i + 1)}<span class="cursor-c"> |</span>`;
				setTimeout(() => { typeWriter(text, i + 1, fnCallback); }, 100);
			} else if (typeof fnCallback == 'function') {
				setTimeout(fnCallback, 700);
			}
		}

		function StartTextAnimation(i) {
			if (typeof dataText[i] == 'undefined') {
				setTimeout(() => { StartTextAnimation(0); }, 20000);
			} else {
				if (i < dataText[i].length) typeWriter(dataText[i], 0, () => StartTextAnimation(i + 1));
			}
		}
		StartTextAnimation(0);
	}, typewriter_delay);
}

async function loadResume(lang=language) {
	return new Promise((resolve) => {
		return getJSON(`${baseDataUrl}/resume_${lang}`, function (err, resume) { 
			return resolve(resume); 
		})
	})
}

async function loadConfig(lang=language) {
	return new Promise((resolve) => {
		return getJSON(`${baseDataUrl}/config_${lang}`, function (err, config) { 
			return resolve(config); 
		})
	})
}

async function loadLetter(lang=language) {
	return new Promise((resolve) => {
		return getJSON(`${baseDataUrl}/letter_${lang}`, function (err, letter) { return resolve(letter); })
	})
}

function getJSON(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = 'json';
	xhr.onload = function () { (xhr.status == 200) ? callback(null, xhr.response) : callback(xhr.status); };
	xhr.send();
};


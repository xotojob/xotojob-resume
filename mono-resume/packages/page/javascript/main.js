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
const language = "en"


window.addEventListener("load", () => {
	loadResume().then((result) => {
		DATA = result
		document.title = `${DATA.resume.resumename}`;
		DATA.info = { appVersion: '2.0', version: DATA.resume.version };

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
				openButton();
				setTypewriter();
			},
			created() {
				EventBus.$on('resume-data', (data) => {
					this.data = data;
				});
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
}, false);

function openButton() {

	let buttonOpen = document.getElementById('mycircle');
	buttonOpen.addEventListener("click", () => {
		if (!buttonOpen.classList.contains("open")) {
			let toFilt = document.querySelectorAll('.loaded:first-child .grid, #typewriter, .right-top-header');
			for (let i = 0; i < toFilt.length; i++) toFilt[i].classList.add('filter-me');
		} else {
			let toFilt = document.querySelectorAll('.grid, #typewriter, .right-top-header');
			for (let i = 0; i < toFilt.length; i++) toFilt[i].classList.remove('filter-me');
		}
	});
}

function setColors() {
	let colors_light = ["rgba(0,113,156, 0.3)"];
	let colors_main = ["rgba(0,113,156, 0.88)"];

	const number = Math.floor(Math.random() * colors_main.length);

	function getColor_light(number) {
		return colors_light[number];
	}

	function getColor_main(number) {
		return colors_main[number];
	}

	document.documentElement.style.setProperty('--main-lighter', getColor_light(number));
	document.documentElement.style.setProperty('--main-color', getColor_main(number));

}

function setTypewriter() {
	let load_delay = 0;
	let typewriter_delay = 700;
	let dataText = DATA.resume.scroll;
	let typewriter_element = document.getElementById("typewriter");

	typewriter_element.style.opacity = 1;

	setTimeout(() => {
		document.querySelectorAll('.page').forEach((e) => {
			e.classList.add('loaded');
		});
	}, load_delay);

	setTimeout(() => {
		function typeWriter(text, i, fnCallback) {
			if (i < text.length) {
				typewriter_element.innerHTML = `${text.substring(0, i + 1)}<span class="cursor-c"> |</span>`;
				setTimeout(() => {
					typeWriter(text, i + 1, fnCallback);
				}, 100);
			} else if (typeof fnCallback == 'function') {
				setTimeout(fnCallback, 700);
			}
		}

		function StartTextAnimation(i) {
			if (typeof dataText[i] == 'undefined') {
				setTimeout(() => {
					StartTextAnimation(0);
				}, 20000);
			} else {
			if (i < dataText[i].length) typeWriter(dataText[i], 0, () => StartTextAnimation(i + 1));
			}

			
		}
		StartTextAnimation(0);
	}, typewriter_delay);
}

async function loadResume(lang=language) {
	return new Promise((resolve) => {
		return getJSON(`${baseDataUrl}/resume_${lang}`, function (err, resume) { return resolve(resume); })
	})
}

function getJSON(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = 'json';
	xhr.onload = function () {
		var status = xhr.status;
		(status == 200) ? callback(null, xhr.response) : callback(status);
	};
	xhr.send();
};


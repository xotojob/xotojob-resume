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
	loadLetter().then((result) => {
		DATA = result
		// DropTarget = new Vue({ el: '#drop-target', data: {visible: true} });
		document.title = `${DATA.letter.letterName}`;
		// document.title = `${DATA.letter.lettername}`;
				EventBus = new Vue();


		Letter = new Vue({
			el: '#root',
			data: DATA,
			methods: {
				initials: function () {
					let name = this.applicant.split(' ');
					return name[0][0] + name[1][0];
				}
			},
			computed: {
				objectiveIsDefined: function () {
					return 'objective' in DATA && Boolean(DATA.objective);
				},
				profileIsDefined: function () {
					return 'profile' in DATA && Boolean(DATA.profile);
				}
			},
			
			mounted: function () {
				let load_delay = 0;
				setTimeout(() => {
					document.querySelectorAll('.page').forEach((e) => {
						e.classList.add('loaded');
					});
				}, load_delay);
			},
			
			created() {
				EventBus.$on('letter-data', (data) => {
					this.data = data;
				});
			}
		});
		
		
		
		DropTarget = new Vue({ 
			el: '#drop-target', 
			data: { visible: true, selectedLanguage: language },			
			methods: {
				async changeLetterLanguage() {
					const newData = await loadLetter(this.selectedLanguage)
					EventBus.$emit('letter-data', newData);
				}
			}, 
		});
					
	});
}, false);

async function loadLetter(lang=language) {
	return new Promise((resolve) => {
		return getJSON(`${baseDataUrl}/letter_${lang}`, function (err, letter) { return resolve(letter); })
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

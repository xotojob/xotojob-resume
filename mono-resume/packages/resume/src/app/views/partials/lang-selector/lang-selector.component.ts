import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
	selector: "app-lang-selector",
	templateUrl: "./lang-selector.component.html",
	styleUrls: ["./lang-selector.component.css"],
})
export class LangSelectorComponent implements OnInit {
	constructor(public translate: TranslateService) {
		translate.addLangs(["en", "fr"]);
		translate.setDefaultLang("en");
	}
	ngOnInit(): void {}

	switchLang(lang: string) {
		this.translate.use(lang);
	}
}

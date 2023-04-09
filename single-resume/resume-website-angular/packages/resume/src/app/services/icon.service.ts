import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { IconHeaderEnums } from "src/app/enums/icon.enums";
import { RouteEnums } from "src/app/enums/route.enums";

@Injectable({ providedIn: "root" })
export class IconService {
	constructor(public translate: TranslateService, private router: Router) {}

	getHeaderIcons(route): string {
		switch (route) {
			case RouteEnums.RESUME_EN:
				return IconHeaderEnums.FILE_ALT;
			case RouteEnums.RESUME_FR:
				return IconHeaderEnums.FILE_ALT;
		}
	}
}

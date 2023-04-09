import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { RouteEnums } from "./enums/route.enums";
import { slideInAnimation } from "./route-animation.ts";
import { IconService } from "./services/icon.service";
import { RouteService } from "./services/routes.service";
import { RouterModule, Routes, ActivatedRoute, Router } from "@angular/router";
import { loadJSON, utilities } from "./utils/Utils";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({ selector: "app-root", templateUrl: "./app.component.html", styleUrls: ["./app.component.css"], animations: [slideInAnimation] })
export class AppComponent implements OnInit {
	RouteEnum = RouteEnums;
	utilities = utilities;
	resumeData: any;
	configData: any;
	routes: any;
	showAll: any = false;
	
	constructor(public http: HttpClient, public router: Router, public route: ActivatedRoute, public translate: TranslateService, public routeService: RouteService, public iconService: IconService) {
		translate.addLangs(["en", "fr"]);
		translate.setDefaultLang("en");
	}
	
	prepareRoute(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
	}
	
	async ngOnInit(): Promise<void> {
		this.routes = this.routeService.GetAllRoutes();
		this.resumeData = await loadJSON(RouteEnums.RESUME_EN)
		this.resumeData = this.resumeData["resume"]
		this.configData = await loadJSON(RouteEnums.CONFIG_EN)
		this.configData = this.configData["config"]
		if (window.location.pathname == "/") this.router.navigate([RouteEnums.RESUME_EN]);
	}
	
	triggerReadMore() {
		this.showAll = true;
	}
	
	switchLang(lang: string) {
		this.translate.use(lang);
	}
	
	seHeadertIcon(route: any): string {
		return this.iconService.getHeaderIcons(route);
	}

}

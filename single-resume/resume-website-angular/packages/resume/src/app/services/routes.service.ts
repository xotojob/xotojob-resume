import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { RouteEnums } from "../enums/route.enums";

@Injectable({
	providedIn: "root",
})
export class RouteService {
	routes: string;
	constructor(public translate: TranslateService, private router: Router) { }
	public GetAllRoutes() {
		this.router.config.forEach((item) => { this.routes = item.path; });
		return [this.routes];
	}




}


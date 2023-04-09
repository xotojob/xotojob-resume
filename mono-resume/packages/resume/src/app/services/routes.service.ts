import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { RouteEnums } from "../enums/route.enums";

@Injectable({
	providedIn: "root",
})
export class RouteService {
	constructor(public translate: TranslateService, private router: Router) {}
	routes = [];
	public GetAllRoutes(selectedModalData) {
		this.router.config.forEach((item) => {
		this.routes.push(this.checkCompany(item, selectedModalData)); 
		// console.log('this.routes: ', this.routes);
		
		this.routes = this.routes.filter((v, i, a) => a.indexOf(v) === i);
		this.setResumeRoute(selectedModalData) 

		});

		return [...new Set(this.routes)];
	}
	
	
	checkCompany(item, selectedModalData) {
			if (item.path) {
				if (item.path === "services" && selectedModalData?.isCompany === "Yes") {
				} else {
					return item.path;
				}
			}
	}
	
	setResumeRoute(selectedModalData) {
							console.log('selectedModalData: ', selectedModalData);

		switch (selectedModalData.resume) {
			case "development":
				this.routes = [RouteEnums.HOME, RouteEnums.CONTACT, RouteEnums.RESUME_EN, RouteEnums.SERVICES]
				
				break;
			case "resume":
				this.routes = [RouteEnums.HOME, RouteEnums.RESUME_EN]

				break;
		
			default:
				break;
		}
	}
	
	 onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
	
}


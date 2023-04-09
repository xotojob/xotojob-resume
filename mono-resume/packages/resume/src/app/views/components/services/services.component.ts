import { Component, OnInit } from "@angular/core";
import { AppComponent } from "src/app/app.component";
// import { PlanEnums } from "src/app/enums/plan.enums";

@Component({
	selector: "app-services",
	templateUrl: "./services.component.html",
	styleUrls: ["./services.component.css"],
})
export class ServicesComponent extends AppComponent {
	
	clicked: boolean = true; 
	
	getPlanServiceCalculation(plan): string {
		switch (plan) {
			case true:
				return "fas fa-check";
		}
	}
	
	
	toggleclicked(faq): void {
		faq.clicked = !faq.clicked;
	}
	
}

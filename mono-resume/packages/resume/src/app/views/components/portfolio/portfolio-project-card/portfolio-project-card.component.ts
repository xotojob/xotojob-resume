import { Component, Input, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { AppComponent } from "src/app/app.component";
import { PortfolioComponent } from "../portfolio.component";

@Component({
	selector: "app-portfolio-project-card",
	templateUrl: "./portfolio-project-card.component.html",
	styleUrls: ["./portfolio-project-card.component.css"],
})
export class PortfolioProjectCardComponent extends PortfolioComponent {
	@Input() portfoliosList = [];
	@Input() currentTab = 'all';

	ngOnChanges(changes: SimpleChanges){
		let aa = changes;
	}
	getPortfoliosList() {
		return this.portfolioList;
	}
}

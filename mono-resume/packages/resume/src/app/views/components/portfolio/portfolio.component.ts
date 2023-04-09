import { AfterViewInit, Component, OnInit } from "@angular/core";
import { AppComponent } from "src/app/app.component";
import { RouteEnums } from "src/app/enums/route.enums";

@Component({
	selector: "app-portfolio",
	templateUrl: "./portfolio.component.html",
	styleUrls: ["./portfolio.component.css"],
})
export class PortfolioComponent extends AppComponent {
	currentTab = "all";
	portfolioList = [];
	// to do fix
	linkType(card) {
		// console.log("card: ", card);
	}

	onChangeTab(type) {
		this.currentTab = type;
		if (type == "frontend") {
			this.portfolioList = this.portfolioData?.card.filter((x) => x.type == "frontend");
		} else if (type == "webapp") {
			this.portfolioList = this.portfolioData?.card.filter((x) => x.type == "webapp");
		} else {
			this.portfolioList = this.portfolioData?.card;
		}
	}
}

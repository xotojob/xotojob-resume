import { AfterViewInit, Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { $ } from "protractor";
import { AppComponent } from "src/app/app.component";
import { RouteEnums } from "src/app/enums/route.enums";
import { IconService } from "src/app/services/icon.service";
import { RouteService } from "src/app/services/routes.service";
import { utilities } from "src/app/utils/Utils";
@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"],
})
export class HeaderComponent extends AppComponent implements AfterViewInit {
	showMorePages = false;
	selectedModalData: any;
	mode: boolean = true;
	
	ngAfterViewInit() {
	}
	
	darkMode() {
		this.mode = !this.mode
	}
	
	onNavClicked() {
		if (window.screen.width < 990) document.getElementById("mobile-menu-btn").click();
	}
	
	togglePageList() {
		this.showMorePages = !this.showMorePages;
	}
}

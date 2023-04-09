import { AfterViewInit, Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { $ } from "protractor";
import { AppComponent } from "src/app/app.component";
import { RouteEnums } from "src/app/enums/route.enums";
// import { LinksModel } from "src/app/models/custom/LinksModel";
import { ApplicationModel } from "src/app/models/shared/application/ApplicationModel";
// import { PersonalLinksModel } from "src/app/models/shared/personal/personal-models/PersonalLinksModel";
// import { PersonalModel } from "src/app/models/shared/personal/PersonalModel";
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
		// let selectedResumeData = JSON.parse(localStorage.getItem("currentResume"));
		// if (selectedResumeData) this.selectedModalData = selectedResumeData;
				
		let selectedResumeData = JSON.parse(localStorage.getItem("currentResume"));
		
		
		if (selectedResumeData) {
			this.selectedModalData = selectedResumeData;
		}
		
		
	}

darkMode(){
 this.mode = !this.mode


}

	onNavClicked() {
		if (window.screen.width < 990) {
			document.getElementById("mobile-menu-btn").click();
		}
	}

	togglePageList() {
		this.showMorePages = !this.showMorePages;
	}
}

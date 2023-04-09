import { Component, OnInit, AfterViewInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { RouteEnums } from "src/app/enums/route.enums";
import { ApplicationModel } from "src/app/models/shared/application/ApplicationModel";
import { HomeModel } from "src/app/models/component/home/HomeModel";
// import { PersonalModel } from "src/app/models/shared/personal/PersonalModel";
import { AppComponent } from "src/app/app.component";
declare var $: any;

@Component({ selector: "app-home", templateUrl: "./home.component.html", styleUrls: ["./home.component.css"] })
export class HomeComponent extends AppComponent implements AfterViewInit {
	certificateCount: number;
	selectedModalData: any;
	
	skillLevels(data: number) {
		return data * 10;
	}

	ngAfterViewInit() {
		let selectedResumeData = JSON.parse(localStorage.getItem("currentResume"));
		if (selectedResumeData) this.selectedModalData = selectedResumeData;
		setTimeout(function () {
			$(".testimonial-carousel").owlCarousel({
				loop: true,
				nav: true,
				dots: true,
				autoplayHoverPause: true,
				autoplay: true,
				margin: 30,
				navText: ["", ""],
				responsive: {
					0: {
						items: 1,
					},
					576: {
						items: 1,
					},
					768: {
						items: 2,
					},
					992: {
						items: 3,
					},
				},
			});
		}, 2000);
	}

	getTest(data) {
		let a = data;
		debugger;
		return data;
	}
}

import { Component, HostListener, OnInit } from "@angular/core";
import { AppComponent } from "src/app/app.component";
@Component({
	selector: "app-resume",
	templateUrl: "./resume.component.html",
	styleUrls: ["./resume.component.css"],
})
export class ResumeComponent extends AppComponent {
	
	@HostListener("window:resize", ["$event"])
	windowSize: number = 100;
	
	onResize(event) {
		var innerWidth = event.target.innerWidth
		switch (innerWidth) {
			case innerWidth < 1100:
				this.windowSize = 60;
				break;
			case innerWidth < 990:
				this.windowSize = 80;
				break;
			default:
				this.windowSize = 100;
				break;
		}
	}
}

import { Component, HostListener, OnInit } from "@angular/core";
import { AppComponent } from "src/app/app.component";

@Component({
	selector: "app-resume",
	templateUrl: "./resume.component.html",
	styleUrls: ["./resume.component.css"],
})
export class ResumeComponent extends AppComponent {
	@HostListener("window:resize", ["$event"])
	onResize(event) {
		if (event.target.innerWidth < 1100) {
			this.windowSize = 60;
		} else if (event.target.innerWidth < 990) {
			this.windowSize = 80;
		} else {
			this.windowSize = 100;
		}
	}


// links() {
// 	return {{'contact.links' | translate}}
// }

	windowSize: number = 100;
}

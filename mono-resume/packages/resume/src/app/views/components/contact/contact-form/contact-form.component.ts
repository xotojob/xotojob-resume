import { Component } from "@angular/core";
import { ContactComponent } from "../contact.component";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpHeaders } from "@angular/common/http";

@Component({
	selector: "app-contact-form",
	templateUrl: "./contact-form.component.html",
	styleUrls: ["./contact-form.component.css"],
})

export class ContactFormComponent extends ContactComponent {
	contactForm = new FormGroup({
		name: new FormControl("", Validators.required),
		email: new FormControl("", Validators.required),
		subject: new FormControl(""),
		services: new FormControl(""),
		message: new FormControl("", Validators.required),
	});
	isFormSubmitted = false;

	contactInformation() {
		if (this.contactForm.valid) {
			this.isFormSubmitted = true;
			super.setContactInformation(this.contactForm.value);

			this.contactForm.reset();
		} else {
			this.contactForm.markAllAsTouched();
		}
	}
}

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ContactPricingComponent } from "./contact-pricing.component";

describe("ContactPricingComponent", () => {
	let component: ContactPricingComponent;
	let fixture: ComponentFixture<ContactPricingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ContactPricingComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ContactPricingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PortfolioProjectCardComponent } from "./portfolio-project-card.component";

describe("PortfolioProjectCardComponent", () => {
	let component: PortfolioProjectCardComponent;
	let fixture: ComponentFixture<PortfolioProjectCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PortfolioProjectCardComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PortfolioProjectCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});

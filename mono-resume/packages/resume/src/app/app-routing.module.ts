import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ContactComponent } from "./views/components/contact/contact.component";
import { HomeComponent } from "./views/components/home/home.component";
import { PortfolioComponent } from "./views/components/portfolio/portfolio.component";
import { ResumeComponent } from "./views/components/resume/resume.component";
import { ServicesComponent } from "./views/components/services/services.component";
import { ModalComponent } from "./views/partials/modal/modal.component";

const routes: Routes = [
	{ path: "home", component: HomeComponent, data: { animation: "Home" } },
	{ path: "portfolio", component: PortfolioComponent, data: { animation: "Portfolio" } },
	{ path: "services", component: ServicesComponent, data: { animation: "Services" } },
	{ path: "resume_en", component: ResumeComponent, data: { animation: "resume_en" } },
	{ path: "contact", component: ContactComponent, data: { animation: "Contact" } },
];
@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}

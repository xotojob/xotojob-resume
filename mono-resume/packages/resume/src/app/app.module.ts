import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ContactComponent } from "./views/components/contact/contact.component";
import { FooterComponent } from "./views/components/footer/footer.component";
import { HeaderComponent } from "./views/partials/header/header.component";
import { HomeComponent } from "./views/components/home/home.component";
import { PortfolioComponent } from "./views/components/portfolio/portfolio.component";
import { ProjectComponent } from "./views/components/project/project.component";
import { ServicesComponent } from "./views/components/services/services.component";
import { ContactFormComponent } from "./views/components/contact/contact-form/contact-form.component";
import { ContactPricingComponent } from "./views/components/contact/contact-pricing/contact-pricing.component";
import { PortfolioProjectCardComponent } from "./views/components/portfolio/portfolio-project-card/portfolio-project-card.component";
import { LangSelectorComponent } from "./views/partials/lang-selector/lang-selector.component";
import { AppRoutingModule } from "./app-routing.module";
import { MultiTranslateHttpLoader } from "ngx-translate-multi-http-loader";
import { ResumeTypeEnums } from "./enums/resume.type.enums";
import { ResumeComponent } from "./views/components/resume/resume.component";
import { ModalComponent } from "./views/partials/modal/modal.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {MatExpansionModule} from '@angular/material/expansion';
import { TruncatePipe } from "./pipe/TruncatePipe";
import { ReadMorePipe } from "./pipe/ReadMorePipe";

// TRANSLATIONS

@NgModule({
	declarations: [ReadMorePipe,TruncatePipe, AppComponent, ContactComponent, FooterComponent, HeaderComponent, HomeComponent, PortfolioComponent, ProjectComponent, ServicesComponent, ContactFormComponent, ContactPricingComponent, PortfolioProjectCardComponent, LangSelectorComponent, ResumeComponent, ModalComponent],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		NgbModule,
		FormsModule,
        ReactiveFormsModule,
		MatExpansionModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

// todo : const resumeType = 'development';
// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
		
		// let folderName = ResumeTypeEnums.DEVELOPMENT.toString();
		// let selectedResumeFolder = JSON.parse(localStorage.getItem('currentResume'));
		// console.log('selectedResumeFolder: ', selectedResumeFolder);
		// if(selectedResumeFolder) folderName = selectedResumeFolder.resume;
		return new MultiTranslateHttpLoader(httpClient, [
		// { prefix: `../assets/i18n/${folderName}/partials/header/`, suffix: ".json" },
		// { prefix: `../assets/i18n/${folderName}/partials/footer/`, suffix: ".json" },
		// { prefix: `../assets/i18n/${folderName}/partials/modal/`, suffix: ".json" },
		// { prefix: `../assets/i18n/${folderName}/component/contact/`, suffix: ".json" },
		// { prefix: `../assets/i18n/${folderName}/component/home/`, suffix: ".json" },
		// { prefix: `../assets/i18n/${folderName}/component/portfolio/`, suffix: ".json" },
		// // { prefix: `../assets/i18n/${folderName}/component/resume/`, suffix: ".json" },
		// { prefix: `../assets/i18n/${folderName}/component/services/`, suffix: ".json" },
		// { prefix: `../assets/i18n/${folderName}/personal/`, suffix: ".json" },
	]);
	
}


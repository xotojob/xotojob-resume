import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./views/partials/header/header.component";
import { LangSelectorComponent } from "./views/partials/lang-selector/lang-selector.component";
import { AppRoutingModule } from "./app-routing.module";
import { MultiTranslateHttpLoader } from "ngx-translate-multi-http-loader";
import { ResumeComponent } from "./views/components/resume/resume.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatExpansionModule } from '@angular/material/expansion';
import { TruncatePipe } from "./pipe/TruncatePipe";
import { ReadMorePipe } from "./pipe/ReadMorePipe";

@NgModule({
	declarations: [ReadMorePipe, TruncatePipe, AppComponent, HeaderComponent, LangSelectorComponent, ResumeComponent],
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
export class AppModule { }

export function HttpLoaderFactory(httpClient: HttpClient) {
	return new MultiTranslateHttpLoader(httpClient, []);

}


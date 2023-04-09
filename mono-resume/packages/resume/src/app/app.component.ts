import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { DataTypeEnums } from "./enums/data.type.enums";
import { RouteEnums } from "./enums/route.enums";
import { ContactModel } from "./models/component/contact/ContactModel";
import { HomeModel } from "./models/component/home/HomeModel";
import { PortfolioModel } from "./models/component/portfolio/PortfolioModel";
import { ResumeModel } from "./models/component/resume/ResumeModel";
import { ServicesModel } from "./models/component/services/ServicesModel";
import { ApplicationModel } from "./models/shared/application/ApplicationModel";
// import { PersonalModel } from "./models/shared/personal/PersonalModel";
import { slideInAnimation } from "./route-animation.ts";
import { IconService } from "./services/icon.service";
import { RouteService } from "./services/routes.service";
import { RouterModule, Routes, ActivatedRoute, Router } from "@angular/router";
import { ModalModel } from "./models/component/modal/ModalModel";
import { loadJSON, utilities } from "./utils/Utils";
import { HttpClient, HttpHeaders } from "@angular/common/http";

// import { ModalModel } from "./models/component/modal/ModalModel";
// import {find} from 'find-up'xxxxx/
// import findEnv from '../../findEnv'
@Component({ selector: "app-root", templateUrl: "./app.component.html", styleUrls: ["./app.component.css"], animations: [slideInAnimation] })


export class AppComponent implements OnInit {
	RouteEnum = RouteEnums;
	
	portfolioData: any;
	resumeData: any;
	serviceData: any;
	personalData: any;
	contactData: any;
	homeData: any;
	footerData: any;
	// portfolioData: PortfolioModel;
	// resumeData: ResumeModel;
	// serviceData: ServicesModel;
	// personalData: PersonalModel;
	// contactData: ContactModel;
	// homeData: HomeModel;
	headerData: any;
	routes: any;
	modalFormValues: ModalModel;
	utilities = utilities;
	contactFormDetail: any;
	selectedModalData: any;
	public showAll: any = false;

	modalVar: boolean;

	constructor(public http: HttpClient, public router: Router, public route: ActivatedRoute, public translate: TranslateService, public routeService: RouteService, public iconService: IconService) {
		translate.addLangs(["en", "fr"]);
		translate.setDefaultLang("en");
	}

	prepareRoute(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
	}
	async ngOnInit(): Promise<void> {
		
		// require('dotenv').config({path: findEnv()});
		// dotenv.config({path: findEnv()})

		// require('dotenv').config({path: findEnv()});

		// let data = [DataTypeEnums.PERSONAL,RouteEnums.CONTACT,RouteEnums.HOME,RouteEnums.RESUME,RouteEnums.SERVICES,RouteEnums.PORTFOLIO,]
		
		// let selectedResumeData = JSON.parse(localStorage.getItem("currentResume"));
		// if (selectedResumeData) this.selectedModalData = selectedResumeData;
		
		// this.selectedModalData = await loadJSON(RouteEnums.MODAL)
		// this.selectedModalData = this.selectedModalData[RouteEnums.MODAL]

		let selectedResumeData = JSON.parse(localStorage.getItem("currentResume"));
		if (selectedResumeData) {
			this.selectedModalData = selectedResumeData;
		}
		this.routes = this.routeService.GetAllRoutes(this.selectedModalData);

		// this.personalData = await loadJSON(DataTypeEnums.PERSONAL)
		// this.personalData = this.personalData[DataTypeEnums.PERSONAL]
					

		this.contactData = await loadJSON(RouteEnums.CONTACT)
		this.contactData = this.contactData[RouteEnums.CONTACT]

		this.homeData = await loadJSON(RouteEnums.HOME) 
		this.homeData = this.homeData[RouteEnums.HOME] 

		this.resumeData = await loadJSON(RouteEnums.RESUME_EN) 
		this.resumeData = this.resumeData["resume"] 
		// console.log('this.resumeData: ', this.resumeData);

		this.serviceData = await loadJSON(RouteEnums.SERVICES) 
		this.serviceData = this.serviceData[RouteEnums.SERVICES] 

		this.portfolioData = await loadJSON(RouteEnums.PORTFOLIO) 
		this.portfolioData = this.portfolioData[RouteEnums.PORTFOLIO] 
		
		
		this.headerData = await loadJSON("header") 
		this.headerData = this.headerData["header"] 
		
this.footerData = await loadJSON("footer") 
		this.footerData = this.footerData["footer"] 
		
// this.serviceData = await loadJSON("service") 
// 		this.serviceData = this.footerData["service"] 
		// this.translate.get(`${DataTypeEnums.PERSONAL}`).subscribe((item: PersonalModel) => {
		// 	this.personalData = item;
		// });
		// this.translate.get(`${RouteEnums.CONTACT}`).subscribe((item: ContactModel) => {
		// 	this.contactData = item;
		// });
		// this.translate.get(`${RouteEnums.HOME}`).subscribe((item: HomeModel) => {
		// 	this.homeData = item;
		// });
		// this.translate.get(`${RouteEnums.RESUME}`).subscribe((item: ResumeModel) => {
		// 	this.resumeData = item;
		// });
		// this.translate.get(`${RouteEnums.SERVICES}`).subscribe((item: ServicesModel) => {
		// 	this.serviceData = item;
		// });
		// this.translate.get(`${RouteEnums.PORTFOLIO}`).subscribe((item: PortfolioModel) => {
		// 	this.portfolioData = item;
		// });
		
		if (window.location.pathname == "/") this.router.navigate(["/home"]);
		
		
		
	}
	
	triggerReadMore() {
		this.showAll = true;
	}

	modalChecked(event) {
		this.modalVar = event;
		return this.modalVar;
	}

	modalValues(event) {
		this.modalFormValues = event;
		return this.modalVar;
	}

	switchLang(lang: string) {
		this.translate.use(lang);
	}

	seHeadertIcon(route: any): string {
		return this.iconService.getHeaderIcons(route);
	}

	public setContactInformation(contactInfo) {
		this.contactFormDetail = contactInfo;
		const email = this.contactFormDetail;
		
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		this.http.post("https://formspree.io/f/mpzkzdzq", { name: email.name, replyto: email.email, services: email.services, subject: email.subject, message: email.message }, { headers: headers }).subscribe((response) => {
			
		});
	}
}
// function findEnv() {

// const find = require('find-up');
// function findEnv() {
// return find.sync(process.env.ENV_FILE || '.env'); 
// };


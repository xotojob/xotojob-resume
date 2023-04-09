import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { TranslateService } from "@ngx-translate/core";
import { HttpLoaderFactory } from "src/app/app.module";
import { ModalModel } from "src/app/models/component/modal/ModalModel";
import { loadJSON } from "src/app/utils/Utils";

@Component({
	selector: "app-modal",
	templateUrl: "./modal.component.html",
	styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnInit {
	// title = "appBootstrap";
	closeResult: string;
	modalFormDetail: any;
	@Output() modalFormDetailEmit = new EventEmitter<any>();

	openApp: boolean = false;
	@Output() openAppEmit = new EventEmitter<boolean>();
	Resume: string;

	isCompany: boolean = false;
	modalData: any;
	contactData: any;

	constructor(private modalService: NgbModal, public translate: TranslateService, public httpClient: HttpClient) {}

	modalForm = new FormGroup({
		isCompany: new FormControl(["No"], Validators.required),
		company: new FormControl(""),
		resume: new FormControl("resume"),
	});
	isFormSubmitted = false;

	modalInformation(modal) {
		if (this.modalForm.valid) {
			this.isFormSubmitted = true;
			this.setModalInformation(this.modalForm.value);
			// this.modalForm.reset();
			modal.close("Save click");
			// this.open(modal)
		} else {
			this.modalForm.markAllAsTouched();
		}
	}

	public setModalInformation(modalInfo) {
		this.modalFormDetail = modalInfo;
	}

	async ngOnInit(): Promise<void> {
				
		this.contactData = await loadJSON("contact")
		this.contactData = this.contactData["contact"]
		
		if(localStorage.getItem('currentResume')){
			this.openApp = true;
			this.openAppEmit.emit(this.openApp);
			return;	
		}
		
		
		this.modalData = await loadJSON("modal")
		this.modalData = this.modalData["modal"]
		
		// this.translate.get("modal").subscribe((item: ModalModel) => {
		// 	this.modalData = item;
		// });
		
	}

	changeAction(event) {
		this.Resume = event.target.innerText;
	}
	
	checkrefff(event) {
		
		if (this.modalForm.value.isCompany === "Yes") {
			this.isCompany = true
		} else if (this.modalForm.value.isCompany === "No") {

		// this.modalForm.value.isCompany = "No"
			this.isCompany = false
		}
	}

	open(content) {
		this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" }).result.then(
			(result) => {
				
				// console.log('this.modalFormDetail: ', this.modalFormDetail);
				localStorage.setItem('currentResume',JSON.stringify(this.modalFormDetail));
				this.closeResult = `Closed with: ${result}`;
				this.openApp = !this.openApp;
				this.openAppEmit.emit(this.openApp);
				this.modalFormDetailEmit.emit(this.modalFormDetail);
				window.location.reload();
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			}
		);
	}

	getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return "by pressing ESC";
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return "by clicking on a backdrop";
		} else {
			return `with: ${reason}`;
		}
	}
}

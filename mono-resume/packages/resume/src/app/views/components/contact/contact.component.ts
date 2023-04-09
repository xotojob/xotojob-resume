import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { RouteEnums } from "src/app/enums/route.enums";
import { ApplicationModel } from "src/app/models/shared/application/ApplicationModel";
import { ContactModel } from "src/app/models/component/contact/ContactModel";
// import { PersonalModel } from "src/app/models/shared/personal/PersonalModel";
import { AppComponent } from "src/app/app.component";

@Component({ templateUrl: "./contact.component.html", styleUrls: ["./contact.component.css"] })
export class ContactComponent extends AppComponent {}

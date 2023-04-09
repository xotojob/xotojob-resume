import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResumeComponent } from "./views/components/resume/resume.component";

const routes: Routes = [
	{ path: "resume_en", component: ResumeComponent, data: { animation: "resume_en" } },
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}

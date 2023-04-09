import { EducationModel } from "./resume-model/EducationModel";

export interface ResumeModel {
	academic: {
		educations: EducationModel;
	};
	award: {
		dataset: [];
	};
	certificate: {
		dataset: [];
	};
	cta: {};
	header: {};
	hobbie: {
		hobbies: [];
	};
	intro: {};
	language: {
		dataset: [];
	};
	project: {
		projects: [];
	};
	skill: {
		dataset: [];
	};
	social: {};
	work: {
		experiences: [];
	};
}

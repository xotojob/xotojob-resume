import { LinkLayoutModel } from "../../custom/links/LinkLayoutModel";
import { OptionsModel } from "../../custom/options/OptionsModel";

export interface ContactModel {
	cta: LinkLayoutModel;
	form: {
		sectionset: {}
		tags: {};
		subject: OptionsModel;
		package: OptionsModel;
		services: LinkLayoutModel;
	};
	pricing: LinkLayoutModel;
	me: LinkLayoutModel;
}

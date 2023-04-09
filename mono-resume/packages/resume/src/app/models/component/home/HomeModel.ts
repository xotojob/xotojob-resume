import { AboutModel } from "../about/aboutModel";
import { ButtonModel } from "../../custom/button/ButtonModel";
import { CertificateModel } from "../../custom/certificates/certificatesModel";
import { LinksModel } from "../../custom/links/LinkItemModel";
import { ServiceModel } from "../../custom/services/servicesModel";
import { SkillsModel } from "../../custom/skills/skillsModel";
import { TestimonialModel } from "../../custom/testimonial/testimonialModel";

export interface HomeModel {
	skill: SkillsModel;
	service: ServiceModel;
	testimonial: TestimonialModel
	certificate: CertificateModel;
	hobbies: any[];
	about: AboutModel;
	tags: {};
	featured: { button: ButtonModel; card: LinksModel[] };
}

import { ButtonModel } from "../button/ButtonModel";

export interface ServiceModel {
	button: ButtonModel;
	title: string;
	subtitle: string;
	dataset: SingleServiceModel[];
}

export interface SingleServiceModel {
	title: string;
	subtitle: string;
	description: string;
	img: string[];
}

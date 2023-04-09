import { ButtonModel } from "../button/ButtonModel";

export interface CardModel {
	title: string;
	subtitle: string;
	img: string;
	value: string;
	date: string;
	type: string;
	button: ButtonModel;
}

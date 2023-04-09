import { ButtonModel } from "../../custom/button/ButtonModel";

export interface ApplicationModel {

	currentPage: {
		button: ButtonModel;
	};
	morePages: {
		button: ButtonModel;
	};
	themeMode: themeTypes
	tags: {};
}

export interface themeTypes {
	light: string,
	dark: string
}

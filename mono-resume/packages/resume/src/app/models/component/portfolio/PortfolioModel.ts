import { ButtonModel } from "../../custom/button/ButtonModel";
import { CardModel } from "../../custom/card/CardModel";

export interface PortfolioModel {
	sectionset: {},
	title: string;
	subtitle: string;
	card: CardModel[];
}

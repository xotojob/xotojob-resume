import { LinksModel } from "src/app/models/custom/links/LinkItemModel";

export interface LinkLayoutModel {
	title: string;
	subtitle: string;
	links: LinksModel[];
}

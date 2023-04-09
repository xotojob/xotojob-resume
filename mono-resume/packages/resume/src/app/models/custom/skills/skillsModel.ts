import { NumberSymbol } from "@angular/common";
import { ButtonModel } from "../button/ButtonModel";

export interface SkillsModel {
    title: string,
    subtitle: string,
    button: ButtonModel,
    dataset: skillInfo[]
}


export interface skillInfo{
	title: string,
	img: string[],
	value: Number,
    description: string
}

export interface SingleCertificateInfo{
	title: string,
	value: string,
	date: string,
	img: string
}
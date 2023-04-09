
export interface TestimonialModel {
	title: string,
	dataset: TestimonialBasicInfo[]
}


export interface TestimonialBasicInfo{
	title: string,
	value: string,
	img: string,
	description: string
}

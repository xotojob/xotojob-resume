export interface CertificateModel {
	title: string;
	subtitle: string;
	dataset: SingleCertificateInfo[];
}

export interface SingleCertificateInfo {
	title: string;
	description: string;
	value: string;
	img: string;
}

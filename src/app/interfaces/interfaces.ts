export interface Alert {
	header: string;
	subHeader: string;
	message: string;
	buttons: string[];
}

export interface Quote {
	id?: string;
	title: string;
	category: string;
	author: string;
	imgUrl: string;
	description: string;
	creator: string;
	createdAt: Date;
	updatedAt?: Date;
}
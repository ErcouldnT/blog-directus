export interface Project {
	title: string;
	description: string;
}

export interface Page {
	title: string;
	content: string;
}

export interface Author {
	name: string;
}

export interface Image {
	filename_disk: string;
	description: string;
}

export interface Post {
	slug: string;
	title: string;
	content: string;
	publish_date: Date;
	author: Author;
	image: Image;
}

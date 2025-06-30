export interface Project {
	title: string;
	description: string;
}

export interface Page {
	title: string;
	content: string;
}

export interface Author {
	first_name: string;
	last_name: string;
}

export interface Image {
	filename_disk: string;
	description: string;
}

export interface Post {
	slug: string;
	title: string;
	content: string;
	date_created: Date;
	author: Author;
	image?: Image;
}

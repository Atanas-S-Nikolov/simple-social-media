interface Reactions {
	likes: number;
	dislikes: number;
}

export interface Post {
	id: number;
	title: string;
	body: string;
	tags: Array<string>;
	reactions: Reactions;
	views: number;
	userId: number;
}

import { IComment } from "./Comment";
import { IPost } from "./Post";

interface IPagination {
	total: number;
	skip: number;
	limit: number;
}

export interface IPostPagination extends IPagination {
	posts: IPost[];
}

export interface ICommentPagination extends IPagination {
	comments: IComment[];
}

export class PostPagination implements IPostPagination {
	posts: IPost[];
	total: number;
	skip: number;
	limit: number;

	constructor() {
		this.posts = [];
		this.total = 0;
		this.skip = 0;
		this.limit = 0;
	}
}

export class CommentPagination implements ICommentPagination {
	comments: IComment[];
	total: number;
	skip: number;
	limit: number;

	constructor() {
		this.comments = [];
		this.total = 0;
		this.skip = 0;
		this.limit = 0;
	}
}

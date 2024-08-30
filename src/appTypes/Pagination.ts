import { Post } from "./Post";

interface Pagination {
	total: number;
	skip: number;
	limit: number;
}

export interface PostPagination extends Pagination {
	posts: Array<Post>;
}

import { ICommentPagination, IPostPagination } from "../appTypes/Pagination";
import { IPost } from "../appTypes/Post";
import { backendRequest } from "../configs/apiConfig";

export async function getPosts(): Promise<IPostPagination> {
	const response = await backendRequest.get("/posts");
	return response.data;
}

export async function getPostComments(
	id: number | string,
): Promise<ICommentPagination> {
	const response = await backendRequest.get(`/posts/${id}/comments`);
	return response.data;
}

export async function updatePost(post: IPost): Promise<IPost> {
	const response = await backendRequest.put(`/posts/${post.id}`, post);
	return response.data;
}

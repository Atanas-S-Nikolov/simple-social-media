import { ICommentPagination, IPostPagination } from "../appTypes/Pagination";
import { IPost } from "../appTypes/Post";
import { backendRequest } from "../configs/apiConfig";

export async function getPosts(skip = 0, limit = 10): Promise<IPostPagination> {
	const response = await backendRequest.get(
		`/posts?limit=${limit}&skip=${skip}`,
	);
	return response.data;
}

export async function getPostComments(
	id: number | string,
): Promise<ICommentPagination> {
	const response = await backendRequest.get(`/posts/${id}/comments`);
	return response.data;
}

export async function updatePost(data: IPost): Promise<IPost> {
	const { id, ...post } = data;
	const response = await backendRequest.put(`/posts/${id}`, post);
	return response.data;
}

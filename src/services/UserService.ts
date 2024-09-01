import { IUser } from "../appTypes/User";
import { backendRequest } from "../configs/apiConfig";

export async function getUser(id: number | string): Promise<IUser> {
	const response = await backendRequest.get(`/users/${id}`);
	return response.data;
}

export async function getUserPosts(id: number | string) {
	const response = await backendRequest.get(`/users/${id}/posts`);
	return response.data;
}

import { backendRequest } from "../configs/apiConfig";

export async function getPosts() {
	const respone = await backendRequest.get("/posts");
	return respone.data;
}

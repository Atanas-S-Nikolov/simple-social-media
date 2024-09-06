import { IComment } from "../appTypes/Comment";
import { backendRequest } from "../configs/apiConfig";

export async function updateComment(data: IComment): Promise<IComment> {
	const { id, ...comment } = data;
	const response = await backendRequest.put(`/comments/${id}`, comment);
	return response.data;
}

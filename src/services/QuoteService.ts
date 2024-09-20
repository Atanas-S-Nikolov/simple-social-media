import { Quote } from "../appTypes/Quote";
import { backendRequest } from "../configs/apiConfig";

export async function getQuote(): Promise<Quote> {
	const response = await backendRequest.get("/quotes/random");
	return response.data;
}

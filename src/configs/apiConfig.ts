import axios from "axios";
import { BASE_URL } from "../constants/URLConstants";

export const backendRequest = axios.create({
	baseURL: BASE_URL,
});

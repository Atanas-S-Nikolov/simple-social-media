import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import HomePage from "../../pages/HomePage";

export const appRouter = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path={"/"} element={<HomePage />} />
		</>,
	),
);

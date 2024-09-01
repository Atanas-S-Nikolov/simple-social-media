import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./lib/router/AppRouter";
import { GlobalStyle } from "./styles/global.styled";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./configs/queryConfig";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<GlobalStyle />
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={appRouter}></RouterProvider>
			<ReactQueryDevtools />
		</QueryClientProvider>
	</StrictMode>,
);

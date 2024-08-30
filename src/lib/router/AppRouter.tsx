import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "@/components/App";

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={"/"} element={<App />} />
    </>
  )
);

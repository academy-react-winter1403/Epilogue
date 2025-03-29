import { createBrowserRouter } from "react-router-dom";
import { publicRoute } from "./public-route/";
export const root = createBrowserRouter([...publicRoute]);

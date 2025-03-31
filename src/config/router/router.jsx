import { createBrowserRouter } from "react-router-dom";
import { publicRoute } from "./public-route/";
import { mainPages } from "./public-route/MainPages";
export const root = createBrowserRouter([
    ...publicRoute,
]);

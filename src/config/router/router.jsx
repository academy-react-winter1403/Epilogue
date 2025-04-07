import { createBrowserRouter } from "react-router-dom";
import { publicRoute } from "./public-route/";
import { mainPages } from "./public-route/MainPages";
import { dashboard } from "./privet-route";
export const root = createBrowserRouter([
    ...publicRoute,
    dashboard
]);

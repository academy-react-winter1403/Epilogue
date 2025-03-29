import { authRoute } from "./auth";

export const publicRoute = [{ path: "/", element: <>home</>, ...authRoute }];

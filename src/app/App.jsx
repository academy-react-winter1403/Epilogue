import React from "react";
import { RouterProvider } from "react-router-dom";
import { root } from "../config/router/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={root} />;
    </QueryClientProvider>
  );
};

export default App;

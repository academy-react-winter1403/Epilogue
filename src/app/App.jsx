import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { root } from "../config/router/router";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={root} />
      </QueryClientProvider>
    </div>
  );
};

export default App;

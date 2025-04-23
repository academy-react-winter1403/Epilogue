import React from "react";
import { RouterProvider } from "react-router-dom";
import { root } from "../config/router/router";
import ErrorBoundary from "../components/common/Error/ErrorBoundaires";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();
const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
      <RouterProvider router={root} />;
      </ErrorBoundary>
    </QueryClientProvider>

  );
};

export default App;

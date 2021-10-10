import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
const Client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={Client}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

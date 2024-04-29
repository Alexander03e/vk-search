import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter basename="/vk-react-test">
      <App />
    </BrowserRouter>
    <ReactQueryDevtools />
  </QueryClientProvider>
);

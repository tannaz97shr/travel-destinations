import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import "./App.css";
import SearchSection from "./components/SearchSection";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col max-w-2xl mx-auto px-4 py-6">
        <SearchSection />
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;

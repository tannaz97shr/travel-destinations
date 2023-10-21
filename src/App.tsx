import { Outlet } from "react-router-dom";
import "./App.css";
import SearchSection from "./components/SearchSection";

function App() {
  return (
    <div className="flex flex-col max-w-2xl mx-auto px-4 py-6">
      <SearchSection />
      <Outlet />
    </div>
  );
}

export default App;

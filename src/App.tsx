import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Orders from "./pages/Orders";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="px-12 pt-4 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

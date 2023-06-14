import ThemeSwitch from "./components/ThemeSwitch";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      {/* <ThemeSwitch /> */}
      <Home />
    </div>
  );
}

export default App;

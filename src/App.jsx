import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Country from "./pages/Country";

function App() {
  return (
    <div className=" w-full overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route path="/country" element={<Country/>} />

      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="w-full sm:w-[1000px] ml-auto mr-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/add" element={<AddRecipe />} /> */}
            {/* <Route path="/manage" element={<Manage />} /> */}
            {/* <Route path="/refresh" element={<Refresh />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

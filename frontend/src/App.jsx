import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import SingleRecipe from "./pages/SingleRecipe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="w-full sm:w-[1000px] ml-auto mr-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
            <Route path="/recipe/:id" element={<SingleRecipe />} />
            {/* <Route path="/manage" element={<Manage />} /> */}
            {/* <Route path="/refresh" element={<Refresh />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

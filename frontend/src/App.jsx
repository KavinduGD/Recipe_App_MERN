import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import SingleRecipe from "./pages/SingleRecipe";
import EditRecipe from "./pages/EditRecipe";

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
            <Route path="/edit-recipe/:id" element={<EditRecipe />} />
            <Route
              path="/manage"
              element={
                <p className="mt-[30px] text-center text-[40px] font-bold text-red-700">
                  Just a dummy page
                </p>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

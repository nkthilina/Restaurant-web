import { BrowserRouter, Routes, Route } from "react-router-dom";
import Restaurant from "./components/Restaurant";
import CreateRestaurant from "./components/CreateRestaurant";
import EditRestaurant from "./components/EditRestaurant";
import RestaurantDetails from "./components/RestaurantDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Restaurant />} />
          <Route path="/create" element={<CreateRestaurant />} />
          <Route path="/edit/:id" element={<EditRestaurant />} />
          <Route path="/show/:id" element={<RestaurantDetails />} />
          {/* <Route path="/show" element={<RestaurantDetails />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

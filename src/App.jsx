import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import AppViewPage from "./Pages/AppViewPage";
import Userdetails from "./Pages/Userdetails";
import ProductsContainer from "./Pages/ProductsContainer";
import ViewDetails from "./Pages/ViewDetails";
import ViewCart from "./Pages/ViewCart";

function App() {
  return (
    <>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<LoginPage />} /> {/* Use element prop */}
        {/* Protected Route */}
        <Route
          path="/app"
          element={
            // <ProtectedRoute>
            <AppViewPage />
            // </ProtectedRoute>
          }
        />
        <Route path="/profile" element={<Userdetails />} />
        <Route path="/products" element={<ProductsContainer />} />
        <Route path="/viewdetails/:id" element={<ViewDetails />}></Route>
        <Route path="/ViewCart" element={<ViewCart />}></Route>
      </Routes>
    </>
  );
}

export default App;

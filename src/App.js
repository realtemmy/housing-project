import { Route, Routes } from "react-router-dom";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Navigation from "./components/navigation/Navigation";
import HomeType from "./home-type/HomeType";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

import Admin from "./admin/Admin";
import ProtectedAdminRoutes from "./components/protected-routes/ProtectedAdminRoutes";
import CreateCategory from "./admin/Category/CreateCategory";
import CreateProperty from "./admin/Property/CreateProperty";

function App() {
  // display based on location

  // route -> /:home_type/:home_name
  // eg realtemmy.com/hostel/ajala

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/:category" element={<HomeType />} />
      </Route>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route
        path="/admin"
        element={
          <ProtectedAdminRoutes>
            <Admin />
          </ProtectedAdminRoutes>
        }
      >
        <Route path="create-category" element={<CreateCategory />} />
        <Route path="create-property" element={<CreateProperty />} />
      </Route>
    </Routes>
  );
}

export default App;

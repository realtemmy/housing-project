import { Route, Routes } from "react-router-dom";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/auth/login" element={<Login />} />
    </Routes>
  );
}

export default App;



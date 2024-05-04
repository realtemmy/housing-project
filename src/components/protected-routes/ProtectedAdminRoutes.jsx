import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedAdminRoutes = ({ children }) => {
  const user = useSelector((state) => state.user);
  let location = useLocation();
  if (!user.role === "admin") {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedAdminRoutes;

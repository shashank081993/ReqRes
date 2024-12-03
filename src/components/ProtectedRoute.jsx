import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ childern }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? childern : <Navigate to="./" />;
}
ProtectedRoute.propTypes;
export default ProtectedRoute;

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "../redux/actions/authActions";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(logOutUser());
    navigate("/logout");
  }, [dispatch, navigate]);
  return <div>you have logged out of system.</div>;
}

export default Logout;

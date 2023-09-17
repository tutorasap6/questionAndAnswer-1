import { navigate } from "gatsby";
import { useEffect } from "react";

const LogoutPage = () => {
  useEffect(() => {
    localStorage.removeItem("token");
    navigate("/");
  }, []);
};

export default LogoutPage;

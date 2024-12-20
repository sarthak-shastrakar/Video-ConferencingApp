import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const router = useNavigate();

    const isAthenticated = () => {
      if (localStorage.getItem("token")) {
        return true;
      }
      return false;
    };
    useEffect(() => {
      if (!isAthenticated()) {
        router("/auth");
      }
    }
  );

    return <WrappedComponent {...props} />;
  };
  return AuthComponent;
};
export default withAuth;

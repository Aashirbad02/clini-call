import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import axiosApp from "../utils/axiosConfig";

const SignOut = () => {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  //Promises
  useEffect(() => {
    axiosApp("signout")
      .then((res) => {
        dispatch({ type: "USER", payload: false });
        navigate("/login");
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default SignOut;

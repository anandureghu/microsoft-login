import { useMsal } from "@azure/msal-react";
import React, { useState } from "react";
import { loginRequest } from "../../authConfig";
import MicrosoftLogin from "react-microsoft-login";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slice/user";

const Microsoft = () => {
  // const { instance } = useMsal();
  // const handleLogin = (instance) => {
  //   instance.loginPopup(loginRequest).catch((e) => {
  //     console.error(e);
  //   });
  // };

  const dispatch = useDispatch()

  const [msalInstance, onMsalInstanceChange] = useState();
  const loginHandler = (err, data, msal) => {
    console.log(err);
    console.log(data)
    if (data) {
      dispatch(login({tokenClaim: data.idTokenClaims, token: data.accessToken}))
      onMsalInstanceChange(msal);
    }
  };
  const logoutHandler = () => {
    // logout from microsoft session
    // msalInstance.logout();
  };

  return (
    <div className="drop-shadow-2xl flex justify-center items-center flex-col py-24 bg-slate-50 px-5 rounded-lg">
      <img
        className="w-20 mb-5 p-0"
        src="./assets/images/logo.png"
        alt="microsoft"
      />
      <h1 className="text-4xl font-light">Microsoft Login</h1>
      <p className="w-80 text-center m-5 font-thin">
        a simple and intelligent microsoft login that makes it easy to
        authenticate
      </p>
      {/* <button onClick={() => handleLogin(instance)}>Sign In</button> */}
      {msalInstance ? (
        <button onClick={logoutHandler}>Logout</button>
      ) : (
        <MicrosoftLogin
          clientId={process.env.REACT_APP_CLIENT_ID}
          authCallback={loginHandler}
          redirectUri={"http://localhost:3000/dashboard"}
          response_type="none"
        />
      )}
    </div>
  );
};

export default Microsoft;

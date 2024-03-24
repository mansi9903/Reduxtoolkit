import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./page/home"));
const Login = lazy(() => import("./page/login"));
const Signup = lazy(() => import("./page/signup"));

const wrapSuspence = (Component) => {
  return function wrapComponent(props) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    );
  };
};
const App = () => {
  const HomePage = wrapSuspence(Home);
  const SignupPage = wrapSuspence(Signup);
  const LoginPage = wrapSuspence(Login);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/signup"} element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

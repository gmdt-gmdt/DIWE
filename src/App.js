import React, { useCallback, useEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Router from "./Router";
import TopBar from "./components/TopBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logoutFromAPI } from "./store/actions/auth-actions";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  const currentUser = useSelector((state) => state.auth);
  const currentToken = getCurrentUser();
  const access = currentToken || (currentUser && currentUser.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = useCallback(() => {
    dispatch(logoutFromAPI());
  }, [dispatch]);

  useEffect(() => {
    if (access) {
      navigate("/");
    } else {
      logOut();
      navigate("/login");
    }
  }, [access]);

  return (
    <>
      {access && (
        <>
          <TopBar />
          <Navbar />
        </>
      )}

      <Router />

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;

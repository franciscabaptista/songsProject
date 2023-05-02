import "./App.css";
import React from "react";
import axios from "axios";
import Catalogo from "./components/Catalogo";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { addMoreMusics } from "./redux/actions/actionCreators";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector((store) => store.user.isLogged);

  useEffect(() => {
    axios.get("http://localhost:3001/songs").then((r) => {
      dispatch(addMoreMusics(r.data));
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={!isLogged ? <Login /> : <Navigate replace to="/catalog" />}
        />
        <Route
          path="/catalog"
          element={isLogged ? <Catalogo /> : <Navigate replace to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;

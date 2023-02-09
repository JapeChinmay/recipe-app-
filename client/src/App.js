import "./App.css";
import { useContext, useEffect } from "react";
import Bar from "./components/Navbar";

import Home from "./Pages/Home";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import axios from "axios";

import { MyContext } from "./Pages/Home/context";

function App() {
  const { user, setUser } = useContext(MyContext);

  // useEffect(() => {
  //   axios.post("/auth-login").then(({ data }) => setUser(data));
  // }, []);

  return (
    <BrowserRouter>
      <Bar />
      <Routes>
        <Route path="/" element={<Home />} />

        {!user && <Route path="/login" element={<Login />} />}
        {!user && <Route path="/signup" element={<Signup />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

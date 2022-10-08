import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";

import Home from "./components/Home";

import Profile from "./pages/Profile";
import PostPage from "./pages/PostPage";

import "./App.css";

import reactLogo from "./assets/react.svg";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post/:postId" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

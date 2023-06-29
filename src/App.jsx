import React from "react";
import "./style/style.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/header/header.jsx";
import { Footer } from "./components/footer/footer.jsx";

import { Main } from "./pages/main/main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

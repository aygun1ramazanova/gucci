import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Form from "./Form"
import Gift from "./Gift"
import Father from "./Father"
import New from "./New"
import Women from "./Women"
import Man from "./Man"
import Children from "./Children"
import Jewelry from "./Jewelry"
import Beauty from "./Beauty"


import "./main.css"

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/father" element={<Father />} />
          <Route path="/new" element={<New />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Man />} />
          <Route path="/children" element={<Children />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/beauty" element={<Beauty />} />
        </Routes>
      </>
      
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
  <App />
</BrowserRouter>
);


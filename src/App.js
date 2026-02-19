import React from "react";
import "./App.css";
import logo from "./media/logo.svg";

export default function App() {
  return (
    <div className="page">
      <div className="header">
        <img src={logo} alt="Fundacja Imbryk" className="logo" />
      </div>
      <div className="content">
        <div className="message">
          <h2>Witamy na oficjalnej stronie Fundacji Imbryk&nbsp;Ikigai!</h2>
          <p>
            Strona jest obecnie w trakcie przygotowywania. <br /> Wkrótce
            wrócimy z pełną wersją.
          </p>
        </div>
      </div>
      <div className="footer"> </div>
    </div>
  );
}

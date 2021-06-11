import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Main";
import Header from "./Header";

const App = () => (
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-md-6">
        <Header />
        <Main />
      </div>
    </div>
  </div>
);

export default App;

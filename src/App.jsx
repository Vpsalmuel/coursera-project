import React from "react";

// import Pizza from "./component/Pizza";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Menu from "./component/Menu";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />

      <Footer />
    </div>
  );
};

export default App;

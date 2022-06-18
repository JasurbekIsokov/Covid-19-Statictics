import React from "react";

import Main from "./Layouts/Main/main";
import HeaderSection from "./Layouts/Header/header.js";
import FooterSection from "./Layouts/Footer/footer.js";

import "./Assets/Style/main.css";
import { MainContainer } from "./Services/Containers/MainContainer.js";

const App = () => {
  return (
    <>
      {/* <Main /> */}
      <HeaderSection />
      <MainContainer />
      <FooterSection />
    </>
  );
};

export default App;

import React from "react";

import Main from "./Layouts/Main/main";
import HeaderSection from "./Layouts/Header/header.js";
import FooterSection from "./Layouts/Footer/footer.js";

import "./Assets/Style/main.css";
import { MainContainer } from "./Services/Containers/MainContainer.js";
import GetProvinces from "./Components/GetProvinces";
import GetReports from "./Components/GetReports";

const App = () => {
  return (
    <>
      {/* <Main /> */}
      <HeaderSection />
      {/* <div className="con"> */}
      <MainContainer />
      {/* <GetProvinces /> */}
      {/* <GetReports /> */}
      {/* </div> */}
      <FooterSection />
    </>
  );
};

export default App;

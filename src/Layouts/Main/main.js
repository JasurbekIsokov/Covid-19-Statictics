import React, { useEffect, useState } from "react";
import { getProvincesList } from "../../Components/API";

/* saytga kirilganda ochiladigan page */

const Main = (props) => {
  // props bu yerda davlatlarni olib keladigan obect

  const test = props.regions.length ? "none" : "block";
  const test2 = props.regions.length ? "block" : "none";
  const cl = props.regions.length ? "main2" : "";
  const testProvinces = props.provinces.data ? "block" : "none";
  const cl2 = props.provinces.data ? "render_province-list" : "";

  const test3 = props.regions.length ? "render_region" : "";
  const test4 = props.provinces ? "render_region" : "";

  const renderRegionListHtml = () => {
    if (!props.regions.length) return;

    return props.regions[0]?.data.data.map((val) => {
      // console.log(val);
      return (
        <div
          className="regions"
          id={val.iso}
          key={val.iso}
          onClick={() => {
            // props.selectRegionsAction(val.iso);
            props.getProvincesAction(val.iso);
          }}
        >
          <h3>{val.name}</h3>
        </div>
      );
    });
  };

  const renderProvincesList = () => {
    if (!props.provinces) return;
    return props.provinces?.data?.map((val) => (
      <div className="provinsiyalar" id={val.lat} key={val.iso}>
        <h3>{val.province}</h3>
        <h2>{val.name}</h2>
      </div>
    ));
  };

  return (
    <>
      <div className="main" style={{ display: test }}>
        <h1 className="title">
          Welcome to the <span className="covid-19">covid-19</span> statistics
          website <span>!</span>
        </h1>
        <button
          className="come"
          onClick={() => {
            props.getRegionsAction();
          }}
        >
          Come in
        </button>
      </div>
      <div className="box">
        <div className={cl}>
          <h2 style={{ display: test2 }} className="regions_title">
            Regions
          </h2>
          <div className={test3}>{renderRegionListHtml()}</div>
        </div>
        <div className={cl2}>
          <h2 style={{ display: testProvinces }} className="regions_title">
            Provinces
          </h2>
          <div className={test4}>{renderProvincesList()}</div>
        </div>
        <div className="render_report"></div>
      </div>
    </>
  );
};

export default Main;

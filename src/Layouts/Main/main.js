import React from "react";

/* sytga kirilganda ochiladigan page */

const main = (props) => {
  let a = { ...props.regions[0]?.data.data };
  // console.log(props.regions[0]?.data);
  console.log(a);
  props.regions[0]?.data.data.map((val) => {
    console.log(val);
  });

  return (
    <>
      <div className="main">
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
    </>
  );
};

export default main;

import React from "react";

/* sytga kirilganda ochiladigan page */

const main = (props) => {
  console.log(props);

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

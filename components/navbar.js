import React from "react";

function Navbar(props) {
    console.log(props);
  return (
    <>
      <div>{props.cryptocurrency}</div>
    </>
  );
}

export default Navbar;
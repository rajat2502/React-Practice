import React from "react";

function MemoComp(props) {
  console.log("memo render");
  return (
    <>
      <h1>it is a memo component, name is {props.name}</h1>
    </>
  );
}

export default React.memo(MemoComp);

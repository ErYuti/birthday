import React, { forwardRef } from "react";

const Page = forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">{props.children}</div>
    </div>
  );
});

export default Page;

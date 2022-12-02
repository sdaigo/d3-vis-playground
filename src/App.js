import { useEffect, useRef } from "react";
import * as d3 from "d3";

import "./styles.css";

const App = () => {
  const graphRef = useRef(null);

  useEffect(() => {
    // selection are objects that represent an element in the document
    d3.select(graphRef.current).append("p").text("hello");
  });

  return (
    <div className="container">
      <div ref={graphRef}></div>
    </div>
  );
};

export default App;

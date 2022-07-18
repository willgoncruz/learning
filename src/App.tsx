import React from "react";
import ErrorBoundary from "ErrorBoundary";
// import { Button } from "antd";
// import "antd/dist/antd.css";

const App = () => (
  <ErrorBoundary>
    <div>
      <span>Teste APP</span>
      {/* <Button type="primary">Button</Button> */}
    </div>
  </ErrorBoundary>
);

export default App;

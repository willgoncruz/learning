import React from "react";
import ErrorBoundary from "ErrorBoundary";
// import { Button } from "antd";

import Button from "component/Button";

const App = () => (
  <ErrorBoundary>
    <div>
      <span>Teste APP</span>
      <Button type="primary" label="Button" onClick={() => <div />} />
    </div>
  </ErrorBoundary>
);

export default App;

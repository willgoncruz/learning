import React from "react";
import Button from "./index";

import { render } from "@testing-library/react";

describe("Button test", () => {
  it("renders successfully", async () => {
    render(<Button type="primary" label="test" onClick={jest.fn()} />);
  });
});

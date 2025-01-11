import React from "react";
import { render } from "@testing-library/react";
import Button from "../src/components/Button";

test("renders Button", () => {
  const { getByText } = render(<Button>Hello</Button>);
  expect(getByText("Hello")).toBeInTheDocument();
});

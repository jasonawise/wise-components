import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import "@testing-library/jest-dom";

describe("Card component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(<Card>Test Content</Card>);
    expect(getByText("Test Content")).toBeInTheDocument();
  });

  it("applies default width class", () => {
    const { container } = render(<Card>Test Content</Card>);
    expect(container.firstChild).toHaveClass("w-full");
  });

  it("applies custom width class", () => {
    const { container } = render(<Card cardWidth="w-1/2">Test Content</Card>);
    expect(container.firstChild).toHaveClass("w-1/2");
  });

  it("applies custom CSS classes", () => {
    const { container } = render(
      <Card customCss="bg-red-500">Test Content</Card>
    );
    expect(container.firstChild).toHaveClass("bg-red-500");
  });

  it("applies both custom width and custom CSS classes", () => {
    const { container } = render(
      <Card cardWidth="w-1/2" customCss="bg-red-500">
        Test Content
      </Card>
    );
    expect(container.firstChild).toHaveClass("w-1/2 bg-red-500");
  });
});
it("matches snapshot with default props", () => {
  const { asFragment } = render(<Card>Snapshot Test Content</Card>);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot with custom width", () => {
  const { asFragment } = render(
    <Card cardWidth="w-1/2">Snapshot Test Content</Card>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot with custom CSS", () => {
  const { asFragment } = render(
    <Card customCss="bg-red-500">Snapshot Test Content</Card>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot with custom width and custom CSS", () => {
  const { asFragment } = render(
    <Card cardWidth="w-1/2" customCss="bg-red-500">
      Snapshot Test Content
    </Card>
  );
  expect(asFragment()).toMatchSnapshot();
});

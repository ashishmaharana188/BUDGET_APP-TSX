import React from "react";
import { describe, expect, test } from "vitest";
import renderer from "react-test-renderer"; // Import react-test-renderer
import Header from "../../src/components/Header";

test("should render Header correctly", () => {
  const tree = renderer.create(<Header />).toJSON(); // Create a snapshot
  expect(tree).toMatchSnapshot(); // Compare with the saved snapshot
});

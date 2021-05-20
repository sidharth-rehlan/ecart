import { fireEvent, render, screen } from "@testing-library/react";
import ColorForm from "./ColorForm";

describe("test color form", () => {
  test("should initially load unchecked", () => {
    render(<ColorForm />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });
  test("should initially load enable button", () => {
    render(<ColorForm />);
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeEnabled();
  });

  test("should diable button on clicking checkbox", () => {
    render(<ColorForm />);
    const submitButton = screen.getByRole("button");
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(submitButton).toBeDisabled();
    expect(submitButton).toHaveStyle({ "background-color": "grey" });
  });
});

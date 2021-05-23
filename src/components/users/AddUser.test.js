import { render, screen } from "@testing-library/react";
import AddUser from "./AddUser";
import userEvent from "@testing-library/user-event";

describe("Add User Test Cases", () => {
  test("firstname should not be more then 15 character long", async () => {
    render(<AddUser></AddUser>);
    const firstnameField = screen.getByRole("textbox", { name: /first name/i });
    userEvent.type(
      firstnameField,
      "testing testinting testinting testinting testin"
    );
    expect(
      await screen.findByText(/Firstname is too long/i)
    ).toBeInTheDocument();
  });

  test("first name  is required", async () => {
    render(<AddUser></AddUser>);
    const firstnameField = screen.getByRole("textbox", { name: /first name/i });
    userEvent.type(firstnameField, "");
    userEvent.tab();
    expect(
      await screen.findByText(/Firstname is required/i)
    ).toBeInTheDocument();
  });

  test("enable submit button after entering all fields", () => {
    render(<AddUser></AddUser>);
    const firstnameInput = screen.getByRole("textbox", { name: /first name/i });
    const lastnameInput = screen.getByRole("textbox", { name: /last name/i });
    const ageInput = screen.getByRole("textbox", { name: /age/i });
    const locationInput = screen.getByRole("combobox", { name: /location/i });
    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeDisabled();

    userEvent.type(firstnameInput, "sidharth");
    userEvent.type(lastnameInput, "rehlan");
    userEvent.type(ageInput, "12");
    userEvent.selectOptions(locationInput, "chandigarh");
    expect(submitButton).toBeEnabled();
  });
});

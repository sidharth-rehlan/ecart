import { render, screen, waitFor } from "@testing-library/react";
import MyAccount from "./MyAccount";
import userEvent from "@testing-library/user-event";

describe.only("MyAccount", () => {
  test("should render MyAccount", () => {
    render(<MyAccount />);
    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });

  test("should show error if user enter more then 15 character as name", async () => {
    render(<MyAccount />);
    const firstnameField = screen.getByLabelText(/First Name/i);

    screen.debug();

    userEvent.type(
      firstnameField,
      "hellow world jksadjfksd  ksdjfkasdjfk ddfdfdf"
    );
    userEvent.clear(firstnameField);

    screen.debug();

    const mustBe = await screen.findByText("mustbe15");

    //  await waitFor(() => {
    expect(mustBe).toBeInTheDocument();
    //  });
  });

  // it('should give required error message if firstname blur without input', () => {
  //   render(<MyAccount />);
  //   const firstname = screen.getByRole('textbox', { name: /firstname/i });
  //   fireEvent.blur(firstname);

  //   expect(screen.getByText('Required')).toBeInTheDocument();
  // });
});

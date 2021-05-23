import { render, screen } from "@testing-library/react";
import Users from "./Users";

describe("Users Testing", () => {
  test("should display list of users on initial load", async () => {
    render(<Users />);
    const listOfItems = await screen.findAllByRole("row");
    expect(listOfItems).toHaveLength(3);
  });
});

import "@testing-library/jest-dom";
import { screen, waitFor } from "@testing-library/react";
import { render } from "../render";
import Login from "@/pages/login";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const DUMMY_USER = {
  email: "test@mail.com",
  password: "secretTest",
};

describe("Login Page", () => {
  it("should render form login", () => {
    render(<Login />);
    const form = screen.getByTestId("form-login");
    expect(form).toBeInTheDocument();
  });

  it("should call the login mutation with the correct variables", async () => {
    const loginUSerSpy = jest.fn();
    loginUSerSpy(DUMMY_USER);

    render(<Login />, {
      mocks: {
        Mutation: {
          loginUser: loginUSerSpy,
        },
      },
    });

    await waitFor(() => expect(loginUSerSpy).toHaveBeenCalled());

    expect(loginUSerSpy.mock.calls[0][0].email).toEqual("test@mail.com");
  });
});

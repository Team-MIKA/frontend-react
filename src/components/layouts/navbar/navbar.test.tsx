import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import mockRouter from "next-router-mock";
import Router from "next/router";
import Navbar from "@components/layouts/navbar/navbar";
import { TextNavItem } from "@components/layouts/navbar/navbaritem";
import { render } from "../../../test-utils";

jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("Links in navbar should", () => {
    beforeEach(() => {
        mockRouter.setCurrentUrl("/");

        // Disable error for this test, as Chakra CSS produces errors.
        //console.error = jest.fn();

        const navItems = [new TextNavItem("/test", "Test")];
        render(<Navbar navItems={navItems} />);
    });
    test("have links in topbar", () => {
        const link = screen.getByText("Test");
        userEvent.click(link);

        expect(Router).toMatchObject({ asPath: "/test" });
    });

    test("have links in burgerbar, on mobile", () => {
        const burgerButton = screen.getByLabelText("Options");
        userEvent.click(burgerButton);

        const link = screen.getByTestId("nav-sidebar-link");
        userEvent.click(link);

        expect(Router).toMatchObject({ asPath: "/test" });
    });

    test("links only exists after sidebar button is clicked, on mobile", () => {
        const link = screen.queryByTestId("nav-sidebar-link");

        expect(link).not.toBeInTheDocument(); // it doesn't exist
    });
});

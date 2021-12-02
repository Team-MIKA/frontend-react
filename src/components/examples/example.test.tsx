import { render, screen } from "@testing-library/react";
import Example from "@components/examples/example-component";
import { sum } from "./example";

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("Components have example text", () => {
    render(<Example />);

    const input = screen.getByRole("example");

    expect(input).toHaveTextContent("This is an example");
});

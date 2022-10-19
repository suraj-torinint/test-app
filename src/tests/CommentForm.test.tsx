import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentForm from "../Components/CommentForm";

test("Initial condition", () => {
    render(<CommentForm />);
    const commentInput = screen.getByPlaceholderText("write your comment here");
    expect(commentInput).toBeInTheDocument();
    const checkbox = screen.getByLabelText("I agree to terms and conditions", { exact: false });
    expect(checkbox).toBeInTheDocument();
    const SubmitButton = screen.getByRole("button", { name: "Comment", exact: false });
    expect(SubmitButton).toBeDisabled();
});

test("Enable button on verifying the form", () => {
    render(<CommentForm />);
    const commentInput = screen.getByPlaceholderText("write your comment here");
    const checkbox = screen.getByLabelText("I agree to terms and conditions", { exact: false });
    const SubmitButton = screen.getByRole("button", { name: "Comment", exact: false });

    // fireEvent.change(commentInput, { target: { value: "something" } });
    userEvent.type(commentInput, "something");
    userEvent.click(checkbox);
    // instead of "fireEvent" we can use userEvent - It is simple & more readable
    expect(SubmitButton).toBeEnabled();

    // if checkbox clicked again, then button should be disabled
    userEvent.click(checkbox);
    expect(SubmitButton).toBeDisabled();
});

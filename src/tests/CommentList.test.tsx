import { render, screen } from "@testing-library/react";
import { comments } from "../App";
import CommentList from "../Components/CommentList";

test("comments not available", () => {
    render(<CommentList allComments={[]} />);
    const h2Element = screen.getByText("No Comments", { exact: false });
    expect(h2Element).toBeInTheDocument();
});

test("List all comments", () => {
    render(<CommentList allComments={comments} />);
    const h2Element = screen.queryByText("No Comments", { exact: false });
    expect(h2Element).not.toBeInTheDocument();

    const commentList = screen.getAllByRole("listitem");
    expect(commentList.length).toBeGreaterThan(1);

    // or
    expect(screen.getByText("comment 1", { exact: false })).toBeInTheDocument();
    expect(screen.getByText("comment 2", { exact: false })).toBeInTheDocument();
});

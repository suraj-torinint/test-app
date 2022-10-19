import { Container } from "@mui/material";
import CommentForm from "./Components/CommentForm";
import CommentList from "./Components/CommentList";

export interface commentType {
    id: number;
    text: string;
}

export let comments: commentType[] = [
    { id: 1, text: "Comment 1" },
    { id: 2, text: "Comment 2" },
];

function App() {
    return (
        <>
            <Container maxWidth="lg" sx={{ alignItems: "center" }}>
                <CommentForm />
                <CommentList allComments={comments} />
            </Container>
        </>
    );
}

export default App;

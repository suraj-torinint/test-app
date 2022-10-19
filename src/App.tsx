import { Container } from "@mui/material";
import CommentForm from "./Components/CommentForm";

function App() {
    return (
        <>
            <Container maxWidth="lg" sx={{ alignItems: "center" }}>
                <CommentForm />
            </Container>
        </>
    );
}

export default App;

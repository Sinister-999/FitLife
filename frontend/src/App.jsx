import {Box} from "@chakra-ui/react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

function App() {
    return (
        <Box minH="100vh">
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Box>
    );
}

export default App;
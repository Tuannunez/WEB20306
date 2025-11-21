import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
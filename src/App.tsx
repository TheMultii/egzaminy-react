import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import E13 from "./Components/E13/E13";
import E14 from "./Components/E14/E14";

export default function App() {
    return (
        <div className="App">
            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/e13" element={<E13/>}/>
                    <Route path="/e14" element={<E14/>}/>
                    <Route
                        path="/"
                        element={<Navigate to="/e13" replace/>}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

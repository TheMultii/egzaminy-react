import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import E13 from "./Components/E13/E13";
import Navbar from "./Components/Navbar/Navbar";

export default function App() {
    return (
        <div className="App">
            <Navbar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<E13/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

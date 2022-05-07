import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import E13 from "./Components/E13/E13";
import E14 from "./Components/E14/E14";
import {useState} from "react";

export default function App() {

    const [path, setPath] = useState(window.location.pathname);

    return (
        <div className="App">
            <div className="w-full md:ml-64 md:w-[unset] mt-[125px] md:mt-0">
                <BrowserRouter>
                    <Navbar/>

                    <div
                        className="z-10 md:z-0 md:flex fixed top-0 left-0 flex-col md:flex-row md:min-h-screen w-full">
                        <div
                            className="flex flex-col w-full md:w-64 text-white bg-[#121212] flex-shrink-0">
                            <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
                                    <span
                                        className="text-lg font-semibold tracking-widest text-white uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">EGZAMINY</span>
                                <button
                                    className="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline">
                                </button>
                            </div>
                            <nav className="flex-grow hidden md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
                                <Link to="/e13" onClick={() => {
                                    setPath('/e13');
                                }}
                                      className={"block px-4 py-2 mt-2 text-sm font-semibold text-white bg-transparent rounded-lg hover:text-white hover:bg-gray-700 " + (path === "/e13" ? "bg-gray-700" : "")}
                                >EE.08 / INF.02 / E.13</Link>
                                <Link to="/e14" onClick={() => {
                                    setPath('/e14');
                                }}
                                      className={"block px-4 py-2 mt-2 text-sm font-semibold text-white bg-transparent rounded-lg hover:text-white hover:bg-gray-700 " + (path === "/e14" ? "bg-gray-700" : "")}
                                >EE.09 / INF.03 / E.14</Link>
                            </nav>
                        </div>
                    </div>
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
        </div>
    );
}

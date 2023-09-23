import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
    useEffect(() => {
        const animate = () => {
            document.querySelectorAll(".animate").forEach(element => {
                (150 < (window.innerHeight) - (element.getBoundingClientRect().top)) ?
                    element.classList.add("active") :
                    element.classList.remove("active");
            });
        }
        animate();
        window.addEventListener("scroll", animate);

        return () => window.removeEventListener("scroll", window);
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} >
                    <Route index element={<Home />} />
                    <Route path="recipes/:id" element={<RecipeDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
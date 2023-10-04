import React, { createContext, useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RecipeDetail from "./pages/RecipeDetail";
import Recipes from './pages/Recipes';

export const AppContext = createContext();

function App() {
    const animate = useCallback(() => {
        document.querySelectorAll(".animate").forEach(element => {
            (70 < (window.innerHeight) - (element.getBoundingClientRect().top)) ?
                element.classList.add("active") :
                element.classList.remove("active");
        });
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", animate);
        return () => window.removeEventListener("scroll", window);
    }, [animate]);

    return (
        <AppContext.Provider value={animate}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} >
                        <Route index element={<Home />} />
                        <Route path="recipes/:id" element={<RecipeDetail />} />
                        <Route path="recipes" element={<Recipes />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
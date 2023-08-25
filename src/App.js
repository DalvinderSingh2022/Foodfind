import React, { useEffect } from "react";
import StartSection from './components/StartSection';
import CategorySection from './components/CategorySection';
import RecipeSection from './components/RecipeSection';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import useFetch from './components/useFetch'
import Loading from "./components/Loading";
import './index.css'

function App() {
    const [isLoadingCate, isErrorCate, { categories }] = useFetch('/categories.php');
    const [isLoadingRec, isErrorRec, { meals }] = useFetch('/random.php');

    useEffect(() => {
        window.addEventListener("scroll", () => {
            document.querySelectorAll(".animate").forEach(element => {
                (160 < (window.innerHeight) - (element.getBoundingClientRect().top)) ?
                    element.classList.add("active") :
                    element.classList.remove("active");

            })
        })
        return () => window.removeEventListener("scroll", window);
    }, []);

    if (isLoadingCate || isLoadingRec) {
        return <Loading />;
    }

    return (
        <>
            <Navbar />
            <main>
                <StartSection />
                <CategorySection isError={isErrorCate} categories={categories} />
                <RecipeSection isError={isErrorRec} meal={meals[0]} />
            </main>
            <Footer />
        </>
    );
}

export default App;
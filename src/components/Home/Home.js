import React from "react";
import Header from "./Header";
import jobBox from "./jobBox";
import jobSearch from "./jobSearch";

const Home = () =>{
    return (
        <div className="home">
            <Header />
            <jobBox />
            <jobSearch />
        </div>
    )
}

export default Home;
import React from "react";
import "./home.css"
import Card from "../card/Card";

const Home = () => {
    return (
        <div className="home-page">
            hello i'am home page
            <div className="cards">
                <Card/>
            </div>
        </div>
    );
}

export default Home;
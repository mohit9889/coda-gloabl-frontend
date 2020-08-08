import React, { useState, useEffect } from 'react';
import "../Styles/HomePage.css";
import { getRecipe } from "../api";

import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar";
import Modal from "../Components/Modal";

import BG1 from "../Assets/Images/Illustration1.png";
import BG2 from "../Assets/Images/Illustration2.png";
import BG3 from "../Assets/Images/Illustration3.png";
import BG4 from "../Assets/Images/Illustration4.png";
import BG5 from "../Assets/Images/Illustration5.png";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            const data = await getRecipe();
            console.log(data);
            setRecipes(data);
        }
        fetchRecipe();
    }, [])

    return (
        <div className="container home-page">
            <img className="bg bg1" src={BG1} alt="" />
            <img className="bg bg2" src={BG2} alt="" />
            <img className="bg bg3" src={BG3} alt="" />
            <img className="bg bg4" src={BG4} alt="" />
            <img className="bg bg5" src={BG5} alt="" />
            <SearchBar />
            <div className="header">
                <p>CATEGORY</p>
                <h1>Pizza & Noodles</h1>
            </div>
            {recipes.length > 0 ?
            <div className="row">
                <div className="col-md-12">
                    <div className="card-columns">
                        {
                            recipes.map((recipe, index) => {
                                return(
                                    <div key={index} className={ index%2===0 ? "card big-card" : "card small-card" }>
                                        <Card 
                                            recipe={recipe} 
                                            setSelectedRecipe={setSelectedRecipe} 
                                            selectedRecipe={selectedRecipe}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div> : null
            }
            {selectedRecipe && (<Modal selectedRecipe={selectedRecipe} setSelectedRecipe={setSelectedRecipe} />) }
        </div>
    );
}

export default HomePage;

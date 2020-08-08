import React, { useState, useEffect } from 'react';
import "../Styles/HomePage.css";
import { getRecipe } from "../api";

import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar";
import Modal from "../Components/Modal";

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

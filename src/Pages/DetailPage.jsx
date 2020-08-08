import React from 'react';
import "../Styles/DetailPage.css";

import SearchBar from "../Components/SearchBar";

import PLAY_ICON from "../Assets/Icons/ionic-ios-play-circle.png";
import STAR_ICON from "../Assets/Icons/Icon awesome-star.png";
import HEART_COLOR from "../Assets/Icons/Icon feather-heart-color.png";

const DetailPage = (props) => {
    const { recipe } = props.history.location;
    const { history } = props;

    const goBack = () => {
        history.goBack();
    }

    return (
        <div className="container detail-page">
            <SearchBar />
            <div onClick={goBack} className="back">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                    <path fillRule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                {" "}<label className="back">Go Back</label>
            </div>
            <div className="row">
                <div className="col1 col-md-5 col-sm-12">
                    <div className="image">
                        <img src={recipe.image} alt=""/>
                        <div className="overlay"></div>
                        <img className="play-icon" src={PLAY_ICON} alt=""/>
                    </div>

                    <div className="ingredients">
                        <p className="heading">Ingredients :</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, tempore, est magni atque non earum quae doloribus laborum, harum provident qui temporibus quos beatae impedit?</p>
                    </div>
                    
                    <div className="how-to">
                        <p className="heading">How to prepare :</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nisi. </p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, placeat perferendis? Dolorum, debitis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nulla enim, mollitia dicta aperiam sapiente a </p>
                    </div>
                </div>

                <div className="col2 col-md-5 col-sm-12">
                    <div className="rating">
                        <h1>{recipe.name}</h1>
                        <div className="star">
                            <p><span>4/5</span></p>
                            <div>
                                <img src={STAR_ICON} alt=""/>
                                <img src={STAR_ICON} alt=""/>
                                <img src={STAR_ICON} alt=""/>
                                <img src={STAR_ICON} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="description">
                        <p className="heading">DESCRIPTION</p>
                        <p>{recipe.description}</p>
                    </div>

                    <div className="circle-group">
                        <div className="circle">
                            <p className="number">8</p>
                            <p>ingredients</p>
                        </div>
                        <div className="circle">
                            <p className="number">8</p>
                            <p>ingredients</p>
                        </div>
                        <div className="circle">
                            <p className="number">8</p>
                            <p>ingredients</p>
                        </div>
                    </div>

                    <div className="fav">
                        <p>FAVOURITE THIS RECIPE</p>
                        <img src={HEART_COLOR} alt=""/>
                    </div>

                    <hr/>

                    <div className="comments">
                        <p>ADD COMMENTS</p>
                        <input type="text" placeholder="Type something here..."/>
                        <button>ADD COMMENT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;

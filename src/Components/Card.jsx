import React from "react";
import { useHistory } from "react-router-dom";

const Card = (props) => {
  const { id, image, name, price, description } = props.recipe;
  const history = useHistory();
  const { setSelectedRecipe } = props;

  const redirectToDetailsPage = (event) => {
    const route = `/details/${id}`;
    history.push({pathname: route, recipe:props.recipe});
  }

  return (
    <div style={{width: "100%", height: "100%"}}>
      <img className="card-img-top" src={image} alt="" />
      <div className="card-body">
        <p className="card-title">{name}</p>
        <p>Price: {price}</p>
        <p className="card-text">{description}</p>
      </div>
      <div className="overlay">
        <button type="button" className="btn btn-outline-dark" onClick={redirectToDetailsPage}>VIEW MORE</button>
        <button type="button" className="btn btn-outline-dark" onClick={() => {
          setSelectedRecipe(props.recipe);
          console.log("press");
          }}>QUICK VIEW</button>
      </div>
    </div>
  );
};

export default Card;

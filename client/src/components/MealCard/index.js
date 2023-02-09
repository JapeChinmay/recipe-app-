import React from "react";

import Card from "react-bootstrap/Card";
import MealModal from "../Modal";

function MealCard({ strMeal, strMealThumb, strInstructions }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={strMealThumb} />
      <Card.Body>
        <Card.Title>{strMeal}</Card.Title>

        <MealModal strMeal={strMeal} strInstructions={strInstructions} />
      </Card.Body>
    </Card>
  );
}

export default MealCard;

import React, { Fragment } from "react";
import MealCard from "../MealCard";
import "./meals.css";

function MealsContainer({ meals }) {
  return (
    <div className="meals-container">
      {meals.map((meal) => {
        return (
          <div>
            <MealCard {...meal} />
          </div>
        );
      })}
    </div>
  );
}

export default MealsContainer;

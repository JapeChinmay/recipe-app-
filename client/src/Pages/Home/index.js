import React, { useEffect, useContext } from "react";
import JumboTron from "../../components/jumbotron";
import axios from "axios";
import MealsContainer from "../../components/MealsContainer";
import { MyContext } from "./context";

function Home() {
  const { meals, setMeals } = useContext(MyContext);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then(({ data }) => setMeals(data.meals))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <JumboTron />
      <MealsContainer meals={meals} />
    </div>
  );
}

export default Home;

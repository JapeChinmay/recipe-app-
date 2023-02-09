import React, { Fragment, useContext, useState } from "react";
import "./jumbotron.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { MyContext } from "../../Pages/Home/context";
import axios from "axios";

function JumboTron() {
  const [searchInput, setSearchInput] = useState("");
  const { setMeals } = useContext(MyContext);
  const searchHandler = () => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}
`
      )
      .then(({ data }) => setMeals(data.meals));
  };

  return (
    <div className="jumbo">
      <h1>Welcome, Search Your Meal Here</h1>

      <InputGroup className="mb-3 button-input">
        <Form.Control
          placeholder="Search here 🍉"
          aria-label="Meal Search Input"
          aria-describedby="meal-search-button"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={searchHandler}
        >
          Search
        </Button>
      </InputGroup>
    </div>
  );
}

export default JumboTron;

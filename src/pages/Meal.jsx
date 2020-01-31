import React, { useEffect } from "react";
import { MealPresentation } from "../components/MealPresentation";
import { IngredientList } from "../components/IngredientList";
import { Recipe } from "../components/Recipe";
import { useParams } from "react-router-dom";

export const Meal = props => {
  const { getMeal } = props;
  const { idMeal } = useParams();

  useEffect(() => {
    idMeal === null ? getMeal() : getMeal(idMeal);
    // eslint-disable-next-line
  }, []);

  const meal = props.meal.meals[0];

  const {
    strMeal,
    strMealThumb,
    strYoutube,
    strCategory,
    strArea,
    strInstructions
  } = meal;

  const item = {
    mealName: strMeal,
    imgAddress: strMealThumb,
    videoAddress: strYoutube,
    mealCategory: strCategory,
    mealArea: strArea
  };

  let ingredientList = [];
  var i;
  for (i = 1; i <= 20; i++) {
    var strIng = `strIngredient${i}`;
    var strMes = `strMeasure${i}`;
    if (meal[strIng] !== "" && meal[strIng] !== null) {
      ingredientList.push([meal[strIng], meal[strMes]]);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <MealPresentation meal={item} />
        </div>
        <div className="col s12 m6">
          <IngredientList ingredients={ingredientList} />
        </div>
      </div>
      <Recipe recipe={strInstructions} />
    </div>
  );
};
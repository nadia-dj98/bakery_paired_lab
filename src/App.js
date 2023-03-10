import NavBar from "./NavBar";
import Title from "./Title";
import RecipeList from "./RecipeList";
import Search from "./Search";
import CakeForm from "./CakeForm";
import React, {useState} from 'react';
import './App.css'

function App() {

  const [cakes, setCakes] = useState([
      {
          cakeName: "Lemon Drizzle",
          ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
          rating: 5
      },
      {
          cakeName: "Tea Loaf",
          ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
          rating: 3
      },
      {
          cakeName: "Brownie",
          ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
          rating: 4
      },
      {
          cakeName: "Carrot Cake",
          ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
          rating: 5
      }

  ]);

  const addNewRecipe = (newRecipe) => {
    setCakes([...cakes, newRecipe]);
  }



  return (
    <>
      <header>
        <NavBar />
        <Title />
      </header>
      <main className="main-section">
        <RecipeList cakes ={cakes} />
        <Search />
        <CakeForm addNewRecipe={addNewRecipe}/>
      </main>
    </>
  );
}

export default App;

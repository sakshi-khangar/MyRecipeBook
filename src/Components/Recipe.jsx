import React, { useState } from 'react';

function Recipe() {
  const [recipeName, setRecipeName] = useState("");
  const [recipes, setRecipes] = useState([]);

  const addRecipe = () => {
    if (recipeName.trim() === "") return;

    setRecipes([...recipes, recipeName]);
    setRecipeName("");
  };

  const deleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  };

  return (
    <div className='container'>
      <h1 className='title'>Recipe Book App</h1>

      <div className='input-container'>
        <input type="text" placeholder="Enter Recipe Name" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />

      <button onClick={addRecipe}>Add Recipe</button>
      </div>

      <h3 className='subtitle'>All Recipes</h3>

      <ul className='recipe-list'>
        {recipes.map((recipe, index) => (
          <li key={index} className='recipe-item'>
            {recipe}
            <button onClick={() => deleteRecipe(index)} className='delete-btn'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe;

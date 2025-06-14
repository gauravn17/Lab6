// main.js

// Run the init() function when the page has loaded
window.addEventListener("DOMContentLoaded", init);

// Starts the program, all function calls trace back here
function init() {
  // Get the recipes from localStorage
  let recipes = getRecipesFromStorage();
  // Add each recipe to the <main> element
  addRecipesToDocument(recipes);
  // Add the event listeners to the form elements
  initFormHandler();
}

/**
 * Reads 'recipes' from localStorage and returns an array of
 * all of the recipes found (parsed, not in string form). If
 * nothing is found in localStorage for 'recipes', an empty array
 * is returned.
 * @returns {Array<Object>} An array of recipes found in localStorage
 */
function getRecipesFromStorage() {
  // A9.
  const storedRecipes = localStorage.getItem('recipes');
  return storedRecipes ? JSON.parse(storedRecipes) : [];
}

/**
 * Takes in an array of recipes and for each recipe creates a
 * new <recipe-card> element, adds the recipe data to that card
 * using element.data = {...}, and then appends that new recipe
 * to <main>
 * @param {Array<Object>} recipes An array of recipes
 */
function addRecipesToDocument(recipes) {
  // A10. Get a reference to the <main> element
  const mainElement = document.querySelector('main');

  // A11. Loop through recipes, create and append <recipe-card>
  recipes.forEach(recipe => {
    const recipeCard = document.createElement('recipe-card');
    recipeCard.data = recipe;
    mainElement.appendChild(recipeCard);
  });
}

/**
 * Takes in an array of recipes, converts it to a string, and then
 * saves that string to 'recipes' in localStorage
 * @param {Array<Object>} recipes An array of recipes
 */
function saveRecipesToStorage(recipes) {
	// B1.
	localStorage.setItem('recipes', JSON.stringify(recipes));
  }
  
  /**
   * Adds the necessary event handlers to <form> and the clear storage
   * <button>.
   */
  function initFormHandler() {
	// B2. Get a reference to the <form> element
	const form = document.querySelector('form');
  
	// B3. Add event listener for 'submit'
	form.addEventListener('submit', (e) => {
	  e.preventDefault(); // prevent page refresh
  
	  // B4. Create new FormData object
	  const formData = new FormData(form);
  
	  // B5. Create recipeObject from form data
	  const recipeObject = {};
	  for (const [key, value] of formData.entries()) {
		recipeObject[key] = value;
	  }
  
	  // B6. Create new <recipe-card> element
	  const newCard = document.createElement('recipe-card');
  
	  // B7. Add data to card
	  newCard.data = recipeObject;
  
	  // B8. Append card to <main>
	  document.querySelector('main').appendChild(newCard);
  
	  // B9. Save to localStorage
	  const currentRecipes = getRecipesFromStorage();
	  currentRecipes.push(recipeObject);
	  saveRecipesToStorage(currentRecipes);
	});
  
	// B10. Get reference to "Clear Local Storage" button
	const clearButton = document.querySelector('button[type="button"]');
  
	// B11. Add click event listener
	clearButton.addEventListener('click', () => {
	  // B12. Clear localStorage
	  localStorage.clear();
  
	  // B13. Clear <main> content
	  document.querySelector('main').innerHTML = '';
	});
  }
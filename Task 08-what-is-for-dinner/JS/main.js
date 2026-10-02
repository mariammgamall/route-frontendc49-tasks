// 1. Array of Meal / Recipe Objects
const recipes = [
  {
    id: 1,
    title: "French Onion Soup",
    description: "Rich beef broth with caramelized onions and melted cheese on toasted bread",
    image: "images/french-onion-soup.jpg",
    cuisine: "French",
    difficulty: "Intermediate",
    prepTime: 15,
    cookTime: 60,
    servings: "4 people",
    rating: 4.7,
    reviewsCount: 267,
    ingredients: [
      "4 large yellow onions, thinly sliced",
      "3 tbsp unsalted butter",
      "4 cups quality beef broth",
      "1/2 cup dry white wine",
      "4 slices French baguette",
      "1 cup Gruyère cheese, grated",
      "2 cloves garlic, minced",
      "1 bay leaf & fresh thyme"
    ],
    instructions: [
      "Melt butter in a heavy pot over medium heat. Add sliced onions and cook slowly for 35-40 minutes, stirring occasionally until deeply caramelized.",
      "Add garlic and cook for 1 minute until fragrant.",
      "Pour in dry white wine to deglaze the pot, scraping up all the golden brown bits from the bottom.",
      "Add beef broth, bay leaf, and thyme. Bring to a boil, then simmer uncovered for 20 minutes.",
      "Ladle hot soup into oven-safe bowls, top each with a toasted baguette slice and a generous mound of Gruyère cheese.",
      "Broil in the oven for 3-4 minutes until cheese is bubbly and golden brown. Serve hot!"
    ],
    nutrition: {
      calories: "380 kcal",
      protein: "18g",
      carbs: "36g",
      fat: "18g",
      fiber: "4g",
      sodium: "980mg"
    },
    chefTips: [
      "Caramelize onions slowly on low-medium heat; patience is key for sweet, deep flavor.",
      "Use high-quality rich beef stock or bone broth for the best soup base.",
      "Gruyère provides authentic flavor, but Swiss or Provolone cheese works great as a substitute."
    ]
  },
  {
    id: 2,
    title: "Honey Garlic Glazed Salmon",
    description: "Tender pan-seared salmon fillets coated in a sticky sweet honey garlic sauce",
    image: "images/honey-garlic-salmon.jpg",
    cuisine: "Asian",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    servings: "2 people",
    rating: 4.9,
    reviewsCount: 412,
    ingredients: [
      "2 fresh salmon fillets (skin-on)",
      "3 tbsp raw honey",
      "2 tbsp low-sodium soy sauce",
      "4 cloves garlic, minced",
      "1 tbsp fresh lemon juice",
      "1 tbsp olive oil",
      "1 tbsp butter",
      "Sliced green onions & sesame seeds for garnish"
    ],
    instructions: [
      "Season salmon fillets with salt, pepper, and a light dusting of paprika.",
      "Heat olive oil and butter in a large skillet over medium-high heat.",
      "Place salmon fillets skin-side up and sear for 4 minutes until golden crust forms.",
      "Flip salmon, then add minced garlic, honey, soy sauce, and lemon juice around the pan.",
      "Spoon the bubbling glaze repeatedly over the salmon for 3-4 minutes until cooked through and glossy.",
      "Garnish with green onions and sesame seeds. Serve alongside steamed rice or asparagus."
    ],
    nutrition: {
      calories: "440 kcal",
      protein: "34g",
      carbs: "24g",
      fat: "22g",
      fiber: "1g",
      sodium: "620mg"
    },
    chefTips: [
      "Pat salmon completely dry with paper towels before cooking for the crispiest sear.",
      "Do not overcook salmon; it continues cooking slightly while resting in the warm glaze.",
      "Add a pinch of red pepper flakes if you prefer a sweet and spicy kick!"
    ]
  },
  {
    id: 3,
    title: "Classic Chicken Tikka Masala",
    description: "Tender marinated chicken pieces simmered in a spiced, creamy tomato sauce",
    image: "images/classic-chicken-tikka-masala.jpg",
    cuisine: "Indian",
    difficulty: "Intermediate",
    prepTime: 20,
    cookTime: 30,
    servings: "4 people",
    rating: 4.8,
    reviewsCount: 520,
    ingredients: [
      "1.5 lbs chicken breast, cut into bite-sized pieces",
      "1 cup plain Greek yogurt",
      "2 tbsp Garam Masala",
      "1 tbsp ground turmeric & cumin",
      "1 large onion, finely chopped",
      "4 cloves garlic & 1 tbsp grated ginger",
      "1 can (14 oz) tomato puree",
      "1/2 cup heavy cream",
      "Fresh cilantro for garnish"
    ],
    instructions: [
      "Marinate chicken in yogurt, lemon juice, garlic, ginger, and half the spices for at least 20 minutes.",
      "Heat oil in a skillet over high heat and sear chicken until browned on all sides (it will finish cooking in sauce).",
      "Remove chicken. In the same pan, melt butter and saute chopped onions until translucent.",
      "Add garlic, ginger, and remaining spices; cook for 1 minute until fragrant.",
      "Pour in tomato puree and simmer for 10-12 minutes until sauce thickens.",
      "Stir in heavy cream and return cooked chicken to the skillet. Simmer for 8-10 minutes until chicken is tender.",
      "Garnish with chopped cilantro and serve with warm garlic naan or basmati rice."
    ],
    nutrition: {
      calories: "510 kcal",
      protein: "42g",
      carbs: "18g",
      fat: "30g",
      fiber: "3g",
      sodium: "740mg"
    },
    chefTips: [
      "Marinate chicken overnight if possible for maximum tenderness and deep spice absorption.",
      "Use heavy cream or full-fat coconut cream to achieve that signature velvety restaurant sauce.",
      "Finish with a drizzle of lemon juice right before serving to elevate the flavors."
    ]
  },
  {
    id: 4,
    title: "Creamy Tuscan Garlic Chicken",
    description: "Pan-seared chicken breasts bathed in a velvety sun-dried tomato and spinach cream sauce",
    image: "images/creamy-tuscan-garlic-chicken.jpg",
    cuisine: "Italian",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 20,
    servings: "4 people",
    rating: 4.9,
    reviewsCount: 388,
    ingredients: [
      "2 large chicken breasts, sliced horizontally into thin cutlets",
      "2 tbsp olive oil & 1 tbsp butter",
      "4 cloves garlic, minced",
      "1/2 cup sun-dried tomatoes, drained and chopped",
      "1 cup heavy cream",
      "1/2 cup chicken broth",
      "2 cups fresh baby spinach",
      "1/2 cup freshly grated Parmesan cheese",
      "Italian seasoning, salt, & black pepper"
    ],
    instructions: [
      "Season chicken cutlets with Italian seasoning, salt, and pepper.",
      "Heat olive oil in a skillet over medium-high heat. Cook chicken for 4-5 minutes per side until golden brown. Set aside.",
      "In the same skillet, melt butter and saute minced garlic and sun-dried tomatoes for 1-2 minutes.",
      "Add chicken broth and heavy cream; bring to a gentle simmer.",
      "Stir in grated Parmesan cheese until melted and smooth.",
      "Add fresh spinach and simmer until wilted.",
      "Return chicken cutlets to the pan and spoon creamy sauce over top. Simmer for 3 minutes before serving."
    ],
    nutrition: {
      calories: "460 kcal",
      protein: "38g",
      carbs: "12g",
      fat: "29g",
      fiber: "2g",
      sodium: "580mg"
    },
    chefTips: [
      "Slice chicken breasts thin for fast and even cooking.",
      "Use sun-dried tomatoes packed in oil for richer garlic and herb flavor.",
      "Pairs wonderfully with fettuccine pasta, rice, or crusty Italian bread!"
    ]
  },
  {
    id: 5,
    title: "Greek Moussaka",
    description: "Traditional baked dish of layered eggplant, spiced minced meat, and rich béchamel sauce",
    image: "images/greek-moussaka.jpg",
    cuisine: "Greek",
    difficulty: "Hard",
    prepTime: 30,
    cookTime: 60,
    servings: "6 people",
    rating: 4.6,
    reviewsCount: 194,
    ingredients: [
      "2 large eggplants, sliced into rounds",
      "1.5 lbs ground lamb or beef",
      "1 large onion & 3 cloves garlic, finely chopped",
      "1 can (14 oz) crushed tomatoes",
      "1 tsp ground cinnamon & oregano",
      "3 tbsp butter & 3 tbsp flour",
      "2 cups whole milk",
      "1/2 cup grated Kefalotyri or Parmesan cheese",
      "2 egg yolks"
    ],
    instructions: [
      "Brush eggplant slices with olive oil, sprinkle salt, and roast at 400°F (200°C) for 20 minutes until tender.",
      "In a deep pan, brown ground meat with onions and garlic. Add cinnamon, oregano, tomatoes, and simmer 20 mins.",
      "Make béchamel sauce: Melt butter, whisk in flour, gradually add milk until thickened. Remove from heat, whisk in egg yolks and half the cheese.",
      "In a baking dish, layer half the eggplants, top with meat sauce, then remaining eggplants.",
      "Pour velvety béchamel sauce over top and sprinkle with remaining cheese.",
      "Bake for 45 minutes until top is golden brown and bubbling. Let rest 15 minutes before slicing."
    ],
    nutrition: {
      calories: "590 kcal",
      protein: "32g",
      carbs: "28g",
      fat: "38g",
      fiber: "6g",
      sodium: "820mg"
    },
    chefTips: [
      "Salt eggplants and let sit for 20 minutes before roasting to remove excess moisture and bitterness.",
      "Allow the baked moussaka to rest 15-20 minutes so layers set neatly when cut.",
      "Cinnamon adds the signature authentic Mediterranean aroma to the meat sauce."
    ]
  }
];

// 2. Global variable to keep track of current recipe index
let currentRecipeIndex = -1;

// 3. Simple function to select a random recipe using Math.random()
function getRandomRecipe() {
  let newIndex;

  // Pick a random number between 0 and recipes.length - 1
  if (recipes.length > 1) {
    do {
      newIndex = Math.floor(Math.random() * recipes.length);
    } while (newIndex === currentRecipeIndex);
  } else {
    newIndex = 0;
  }

  currentRecipeIndex = newIndex;
  return recipes[newIndex];
}

// 4. Simple function to display recipe details on the page
function displayRecipe(recipe) {
  // Update text elements using getElementById and innerText
  document.getElementById("recipeTitle").innerText = recipe.title;
  document.getElementById("recipeDescription").innerText = recipe.description;
  document.getElementById("recipeImage").src = recipe.image;
  document.getElementById("recipeImage").alt = recipe.title;

  // Update badges
  document.getElementById("recipeCuisine").innerText = recipe.cuisine;
  document.getElementById("recipeDifficulty").innerText = recipe.difficulty;
  document.getElementById("recipeRating").innerText = recipe.rating;
  document.getElementById("recipeReviews").innerText = `(${recipe.reviewsCount} reviews)`;

  // Update times & servings
  document.getElementById("prepTime").innerText = `${recipe.prepTime} min`;
  document.getElementById("cookTime").innerText = `${recipe.cookTime} min`;
  document.getElementById("servings").innerText = recipe.servings;

  // Show or hide prep warning box if total time is over 45 minutes
  const totalTime = recipe.prepTime + recipe.cookTime;
  const warningBox = document.getElementById("prepWarningBox");

  if (totalTime > 45) {
    warningBox.classList.remove("d-none");
    document.getElementById("warningText").innerText = `Extended Prep Time - This recipe takes ${totalTime} minutes total to prepare & cook. Plan accordingly!`;
  } else {
    warningBox.classList.add("d-none");
  }

  // 1. Ingredients Tab List
  const ingredientsContainer = document.getElementById("ingredientsList");
  ingredientsContainer.innerHTML = "";
  for (let i = 0; i < recipe.ingredients.length; i++) {
    const li = document.createElement("li");
    li.className = "ingredient-row d-flex align-items-center mb-3";
    li.innerHTML = `
      <span class="badge-num me-3">${i + 1}</span>
      <span class="ingredient-text text-dark fw-medium">${recipe.ingredients[i]}</span>
    `;
    ingredientsContainer.appendChild(li);
  }

  // 2. Instructions Tab Steps
  const instructionsContainer = document.getElementById("instructionsList");
  instructionsContainer.innerHTML = "";
  for (let i = 0; i < recipe.instructions.length; i++) {
    const div = document.createElement("div");
    div.className = "instruction-step-item d-flex align-items-start mb-4";
    div.innerHTML = `
      <div class="step-circle-badge me-3 mt-1">${i + 1}</div>
      <div class="step-desc-text text-secondary">${recipe.instructions[i]}</div>
    `;
    instructionsContainer.appendChild(div);
  }

  // 3. Nutrition Tab Cards
  document.getElementById("nutrCalories").innerText = recipe.nutrition.calories;
  document.getElementById("nutrProtein").innerText = recipe.nutrition.protein;
  document.getElementById("nutrCarbs").innerText = recipe.nutrition.carbs;
  document.getElementById("nutrFat").innerText = recipe.nutrition.fat;
  document.getElementById("nutrFiber").innerText = recipe.nutrition.fiber;
  document.getElementById("nutrSodium").innerText = recipe.nutrition.sodium;

  // 4. Chef's Tips Tab List
  const tipsContainer = document.getElementById("chefTipsList");
  tipsContainer.innerHTML = "";
  for (let i = 0; i < recipe.chefTips.length; i++) {
    const div = document.createElement("div");
    div.className = "chef-tip-box d-flex align-items-center mb-3 p-3 rounded-3";
    div.innerHTML = `
      <i class="fa-solid fa-circle-check tip-check-icon me-3 fs-5"></i>
      <span class="text-dark fw-medium">${recipe.chefTips[i]}</span>
    `;
    tipsContainer.appendChild(div);
  }
}

// 5. Simple function to switch between tabs
function switchTab(targetTabId) {
  const tabButtons = document.querySelectorAll(".nav-tab-btn");
  const tabContents = document.querySelectorAll(".tab-pane-content");

  // Remove active class from all tabs & hide all content panes
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.add("d-none");
  }

  // Show selected tab and mark button as active
  const activeBtn = document.querySelector(`[data-tab="${targetTabId}"]`);
  const activeContent = document.getElementById(targetTabId);

  if (activeBtn) activeBtn.classList.add("active");
  if (activeContent) activeContent.classList.remove("d-none");
}

// 6. When the page finishes loading, initialize event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Show a random recipe on page load
  displayRecipe(getRandomRecipe());

  // Click handler for "Try Another Recipe" button
  const btnGenerate = document.getElementById("btnGenerate");
  btnGenerate.addEventListener("click", () => {
    displayRecipe(getRandomRecipe());
  });

  // Click handlers for tab buttons
  const tabButtons = document.querySelectorAll(".nav-tab-btn");
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab");
      switchTab(targetTab);
    });
  }

  // Bookmark toggle button
  const btnBookmark = document.getElementById("btnBookmark");
  if (btnBookmark) {
    btnBookmark.addEventListener("click", function () {
      const icon = this.querySelector("i");
      icon.classList.toggle("fa-solid");
      icon.classList.toggle("fa-regular");
      this.classList.toggle("active");
    });
  }
});

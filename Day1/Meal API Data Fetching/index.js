document.getElementById('get-category-data').addEventListener('click', getCategoriesData);
document.getElementById('get-ingredient-data').addEventListener('click', getIngredientData);

async function getCategoriesData() {
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
    try {
        const response = await fetch(url);
        
        const data = await response.json();
        console.log(data);
        displayData(data, 'category')
    } catch (error) {
        console.error('Something went wrong:', error);
        console.log('something went wrong');
    }
}

async function getIngredientData() {
    const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast';
    try {
        const response = await fetch(url);
        
        const data = await response.json();
        displayData(data, 'ingredient');
        console.log(data);
    } catch (error) {
        console.error('Something went wrong:', error);
        console.log('something went wrong');
    }
}
function displayData(data, elementId) {
    const container = document.getElementById(elementId);
    container.innerHTML = ''; 

    data.meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        mealDiv.innerHTML = `
            <h3>${meal.strMeal}</h3>
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="100">
        `;
        container.appendChild(mealDiv);
    });
}
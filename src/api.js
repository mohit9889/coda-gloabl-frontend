const url = "http://starlord.hackerearth.com/recipe";

export const getRecipe = async () => {
    let recipes = JSON.parse(localStorage.getItem("Recipes"));
    
    if (recipes) {
        return recipes;
    }
    
    await fetch(url)
        .then(res => res.json())
        .then(data => {
            recipes = data;
        })
        .catch(err => console.log(err));
    
    return recipes;
}
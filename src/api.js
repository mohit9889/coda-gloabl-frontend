const url = "http://starlord.hackerearth.com/recipe";

export const getRecipe = async () => {
    let recipes = [];
    await fetch(url)
        .then(res => res.json())
        .then(data => {
            recipes = data;
        })
        .catch(err => console.log(err));
    return recipes;
}
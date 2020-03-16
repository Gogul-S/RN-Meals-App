class meal {
    constructor(id, categoryIds, name, affordablity, complexity, imageUrl, duration, ingredients, instructions, glutenFree, vegan, vegetarian, lactoseFree) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.name = name;
        this.affordablity = affordablity;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.glutenFree = glutenFree;
        this.vegan = vegan;
        this.vegetarian = vegetarian;
        this.lactoseFree = lactoseFree;
    }
}

export default meal;
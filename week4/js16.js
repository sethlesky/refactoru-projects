

var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
}

FoodItem.prototype.stringify = function() {
	return this.name + " " + this.calories + " " 
			+ this.vegan + " " + this.glutenFree + " " + this.citrusFree;
}

var burrito = new FoodItem('burrito', 1000, false, true, false);
var apple = new FoodItem('apple', 10, true, true, false);
var potato = new FoodItem('potato', 5, true, true, true);

// console.log(burrito, apple, potato);

var Drink = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
}

Drink.prototype.stringify = function() {
	var rest = '\n Ingredient List';
	// console.log(this);
	this.ingredients.forEach(function(item) {
		// console.log(item);
		rest += '\n\tName: ' + item.name + '\n\t Calories: ' + item.calories + '\n\t Vegan: ' + item.vegan + '\n\t GlutenFree: ' + item.glutenFree + '\n\t CitrusFree: ' + item.citrusFree;
	})
	return "Name: " + this.name + "\nDescription: " + this.description + "\nPrice: " + this.price + " " + rest;
}

// var ingredients = [burrito, apple, potato];
// var apbsmoothie = new Drink('apbsmoothie', 'apple n stuff smoothie', 7.99, ingredients);
// console.log(apbsmoothie.stringify());


var Plate = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
}

// is this kosher?
Plate.prototype.stringify = Drink.prototype.stringify;

// var ingredients = [burrito, apple, potato];
// var apbsmoothie = new Plate('apbsmoothie', 'apple n stuff smoothie', 7.99, ingredients);
// console.log(apbsmoothie.stringify());

var Order = function(plates) {
	this.plates = plates;
}

Order.prototype.stringify = function() {
	var str = '';
	this.plates.forEach(function(item) {
		str += item.stringify();
	})
	return str;
}

// var ingredients = [burrito, apple, potato];
// var apbsmoothie = new Plate('apbsmoothie', 'apple n stuff smoothie', 7.99, ingredients);
// var food = new Plate('food', 'apple n stuff plate', 12.99, ingredients);
// var order = new Order([food, apbsmoothie]);
// console.log(order.stringify());


var Menu = function(plates) {
	this.plates = plates;
}

Menu.prototype.stringify = Order.prototype.stringify;

// var ingredients = [burrito, apple, potato];
// var apbsmoothie = new Plate('apbsmoothie', 'apple n stuff smoothie', 7.99, ingredients);
// var food = new Plate('food', 'apple n stuff plate', 12.99, ingredients);
// var menu = new Menu([food, apbsmoothie]);
// console.log(menu.stringify());


var Restaurant = function(name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
}

Restaurant.prototype.stringify = function() {
	var rest = '';
	// console.log(this.menu);
	this.menu.plates.forEach(function(item) {
		rest += '\n' + item.stringify();
	})
	return "Name: " + this.name + "\nDescription: " + this.description + " " + rest;
}

// var ingredients = [burrito, apple, potato];
// var apbsmoothie = new Plate('apbsmoothie', 'apple n stuff smoothie', 7.99, ingredients);
// var food = new Plate('food', 'apple n stuff plate', 12.99, ingredients);
// var menu = new Menu([food, apbsmoothie]);

// var bobsPlace = new Restaurant('Bobs Place', 'New american mexican smoothie fusion', menu);

// console.log(bobsPlace.stringify());

var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
}

Customer.prototype.stringify = function() {
	return this.dietaryPreference;
}

var ingredients = [burrito, apple, potato];
var apbsmoothie = new Plate('apbsmoothie', 'apple n stuff smoothie', 7.99, ingredients);
var foodPlate = new Plate('food', 'apple n stuff plate', 12.99, ingredients);

Plate.prototype.isVegan = function() {
	for (var i = 0; i < this.ingredients.length; i++) {
		if (!this.ingredients[i].vegan) {
			return false;
		}
	}
	return true;
}

Plate.prototype.isGlutenFree = function() {
	for (var i = 0; i < this.ingredients.length; i++) {
		if (!this.ingredients[i].glutenFree) {
			return false;
		}
	}
	return true;
}

Plate.prototype.isCitrusFree = function() {
	for (var i = 0; i < this.ingredients.length; i++) {
		if (!this.ingredients[i].citrusFree) {
			return false;
		}
	}
	return true;
}

console.log(foodPlate.isVegan());
console.log(foodPlate.isGlutenFree());
console.log(foodPlate.isCitrusFree());

var carne = new FoodItem('carne asada', 1300, false, false, false);
var cheese  = new FoodItem('queso', 500, true, true, true);
var habenero = new FoodItem('habenero', true, true, false);
var burrPlate = new Plate('monster burro', 'massive spicey cheesey butthole burner', 23.00, [carne, cheese, habenero]);

console.log(burrPlate.stringify());

//Guacamole Plate, and a Margarita Drink.
var guac = new FoodItem('guac', 200, true, true, false);
var onion  = new FoodItem('onion', 100, true, true, false);
var habenero = new FoodItem('habenero', 50, true, true, false);
var guacPlate = new Plate('monster guac plate', 'massive spicey guacy eyehole burner', 10.00, [onion, guac, habenero]);

console.log(guacPlate.stringify());

var booze = new FoodItem('tequila', 140, false, true, true);
var mix = new FoodItem('Margarita Mix', 200, true, true, false);
var salt = new FoodItem('salt', 0, true, true, true);

var margarita = new Drink('Margarita', 'salty toxic radioactive green citrus drink', 1.50, [booze, mix, salt]);

console.log(margarita.stringify());

var bobsMenu = new Menu ([burrPlate, guacPlate, margarita])

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-',bobsMenu.stringify());

var bobsPlace = new Restaurant ('Bob\'s Burners', 'Next to the emergency care clinic', bobsMenu);
console.log('0-0-0-0-0-0-0-00-0-0-0-0-0', bobsPlace.stringify())


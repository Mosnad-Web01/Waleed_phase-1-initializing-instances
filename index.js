// Write your code here

// Breakfast class
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

// Lunch class
class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

// Dinner class
class Dinner {
  #dessert; // Private property
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#dessert = dessert; // Initialize private property
  }
}

// Creating instances of each class
let breakfast1 = new Breakfast("Pancakes", "Coffee");
let lunch1 = new Lunch("Caesar Salad", "Tomato Soup", "Water");
let dinner1 = new Dinner("Garden Salad", "Chicken Noodle Soup", "Steak", "Cheesecake");

// Logging instances to the console
console.log(breakfast1); // => Breakfast { food: 'Pancakes', drink: 'Coffee' }
console.log(lunch1);     // => Lunch { salad: 'Caesar Salad', soup: 'Tomato Soup', drink: 'Water' }
console.log(dinner1);    // => Dinner { salad: 'Garden Salad', soup: 'Chicken Noodle Soup', entree: 'Steak' }
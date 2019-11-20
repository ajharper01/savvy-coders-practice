function Menu(entree, drink, side) {
  this.entree = entree;
  this.drink = drink;
  this.side = side;
  this.mealForToday = function() {
    if (this.meal === "soda") {
      return `This is my favorite drink ${this.drink}.`;
    }
      else {
        return `It is not the healthiest choice but I like it.`;}
    };
  this.orderFood = function() {return `Hello, I'd like to get ${this.entree}. I would also like ${this.drink}`
  };
}
const me = new Menu("breakfast", "soda", "fries");
console.log(me);
console.log(me.mealForToday());
console.log(me.orderFood());

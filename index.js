//FUNCTION CONSTRUCTOR
function Car(year, make, model, trans){
	this.year = year;
	this.make = make;
	this.model = model;
	this.trans = trans;
	this.carShow = function (){
		return `This is a ${this.year}, ${this.make}. It has a ${this.trans} transmission.`
	};
	this.isBeater = function() {
		if(this.year <= 2005) {
			return `It's 2019 man! You need a new car!`;
		} else {
			return "This is a sparkly new whip! ";
		}
	};
	this.isStick = function() {
		if (this.trans === "Manual"){
			return 	`Don't forget to practice your ${this.trans} hill starts!`
		}
		else {
			return `You have nothing to worry about, you drive a ${this.trans}..`
		}
	}
};

const fresh = new Car(2017, "Subaru", "WRX", "Manual");
console.log(fresh.carShow());
console.log(fresh.isBeater());
console.log(fresh.isStick());

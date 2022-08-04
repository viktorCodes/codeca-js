// MAKING A 'SPECIAL MEAL(s)' FOR A RESTAURANT WEBSITE

// CREATE MENU OBJECT

const menu = {
//CREATE MEAL AND PRICE PROPERTIES
    _meal: '',
    _price: 0,

//CREATE SETTER METHODS

set meal(mealToCheck){
    if(typeof mealToCheck === 'string'){
        return this._meal = mealToCheck
    }
},

set price(priceToCheck) {
    if(typeof priceToCheck === 'number'){
        return this._price = priceToCheck
    }
},

//CREATE A GETTER METHOD

get todaysSpecial(){
    if(this._meal && this._price){
        return `Todays Special is ${this._meal} for $${this._price}!`
    } else {
        return 'Meal and Price  not set correctly!'

        
    }
}



};

//ASSIGN VALUES TO MEAL AND PRICE PROPERTIES

menu.meal = 'Pizza';
menu.price = 8;

//LOG TODAYS SPECIAL TO CONSOLE
console.log(menu.todaysSpecial);
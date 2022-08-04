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
}


}
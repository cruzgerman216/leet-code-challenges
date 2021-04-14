// parameters -> objs
// key name of an ingredient
// value integer amount 

// return

function cakes(recipe={eggs:2, milk:1}, available={eggs:4, milk:3}){

    // grab the amount of keys in recipe
    // loop through that
    // divide key values to see how much you can make 
    // declare a separate variable to see how much you can make 

    let amount = null;
    Object.keys(recipe).forEach(ingredient=>{
        let recipe_value = recipe[ingredient];
        let available_value = available[ingredient];

        if(available_value == null){
            amount = 0;
        }

        // divide without remainder value and rounding
        let total = Math.floor(available_value / recipe_value);

        if(amount && total < amount){
            amount = total;
        }else if(amount == null){
            amount = total;
        }
    })
    return amount;
}

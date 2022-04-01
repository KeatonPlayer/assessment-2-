///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/
let total = 0
const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]




const summedPrice = cart.reduce((previous, current) => previous + current.price, total)



//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice (cartTotal, tax, coupon){
let tot = cartTotal * tax + cartTotal - coupon
return tot
}

console.log(calcFinalPrice(summedPrice, .03, 5))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    
    I thought that a customer object should be getting the information for the service.
    Information should include where the customer lives contact information, mail etc. 
    Info that would be important for sending out packages and items the client bought. 

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const krustyKrabCustomer = {
name: 'Patrick',
address: '120 Conch Street, Bikini Bottom, Pacific Ocean',
lastName: 'Star',
email: 'patrickthestar@bikinimail.com',
phone: '776-444-3212',
}




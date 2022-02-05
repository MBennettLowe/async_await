const express = require('express');
const app = express();

// Utilities
const port = 5000;
const URL = "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"


// Order from customer
// We have to create an order fuction first to start production
let order = () => {
    const myFlavors = ["vanilla", "chocolate", "strawberry"];
    console.log("Hi, may I take your order?")
}

// Fetch ingredients
// Use the Fetch method for Ice Cream API
// For example purposes use www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

app.get('/URL', (req, res) => {
    console.log("Did this connect");
})

app.listen(port, () => {
    console.log("I'm listening")
});

export default app;

// Start Production
// Call order function call_

// Serve Ice Cream
// Callback response?

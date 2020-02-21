"use strict";

const express = require("express");
const cart = require("./cart");

const app = express();
const port = 5555;

app.use(express.json());

//An array of all cart items
app.get("/cart-items", (req, res) => {
  res.status(200);
  res.json(cart);
});

//Search for cart item by ID number, if ID doesn't exist
//return error status
app.get("/cart-items/:id", (req, res) => {
  const cartItem = cart.find(item => item.id == req.params.id);
  if (!cartItem) {
    res.status(404);
    res.json("ID Not Found");
  } else {
    res.status(200);
    res.json(cartItem);
  }
});

//Add item to array and generate random ID for it
app.post("/cart-items", (req, res) => {
    const newItem ={
        id: Math.floor((Math.random() * 999) + 1),
        product = body.product,
        price = body.price,
        quantity = body.quantity
    };
    res.status(201);
    res.json(newItem);
});

app.put("/cart-items/:id", (req, res) => {
    res.status(200);
});

//Delete item from array with given ID
app.delete("/cart-items/:id", (req, res) => {
    const cartItem = cart.find(item === req.params.cart);
    const id = req.params.id;
    cartItem.splice(id);
    res.json("Deleting cart item");
    res.status(204);
});

// app.post( '/facts', (req, res) => {
//     res.json(getRandomFact());
// });

// app.post( '/facts', (req, res) => {

//     const ID = new Date().getTime();

//     const newItem ={
//         id: ID,
//         product = body.product,
//         price = body.price,
//         quantity = body.quantity

//     }
// });

// app.put( '/facts/:index', (req, res) => {
//     const index = req.params.index;
//     const newFact = req.body.data;

//     factsArray.splice(index, 1, newFact)
//     res.json("Updating random fact by index");
// });

// app.delete( '/facts/:index', (req, res) => {
//     const index = req.params.index;

//     factsArray.splice(index, 1)
//     res.json("Deleting random fact");
// });

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

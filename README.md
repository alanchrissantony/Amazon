<h1 align="center">Amazon<h1/>

# MERN Ecommerce-Application


## Table of contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Run](#run)
- [Technology](#technology)
- [Features](#features)
- [Database Models](#database)

## Introduction

A virtual ecommerce web application using React, Node js, Express js, and Mongoose.

NOTE: Please read the RUN section before opening an issue.

## Demo

<p align="center">
<img src="https://imgur.com/AUANDIe.png"/>
<img src="https://imgur.com/ttUp2cr.png"/>
<img src="https://imgur.com/Q2eD0Ch.png"/>
<img src="https://imgur.com/u7QgIXP.png"/>
<img src="https://imgur.com/leiBFEb.png"/>

<img src="https://imgur.com/eG2LmmH.png"/>
<img src="https://imgur.com/M26A2bA.png"/>
<img src="https://imgur.com/UEWyeHs.png"/>
<img src="https://imgur.com/SSvN2Xo.png"/>
<img src="https://imgur.com/AkcApjM.png"/>

<img src="https://imgur.com/foLzkN4.png"/>
<img src="https://imgur.com/EP1UcYI.png"/>
<img src="https://imgur.com/uRWhLIN.png"/>
<img src="https://imgur.com/Fyul6Fp.png"/>
<img src="https://imgur.com/C2zV6l1.png"/>

<img src="https://imgur.com/cpign8g.png"/>
<img src="https://imgur.com/EYsweEs.png"/>
</p>


The website resembles a real store and you can add products to your cart and pay for them. If you want to try the checkout process, you can use the dummy card number with any expiration date, CVC, and zip codes. Please <u><b>DO NOT</b></u> provide real card number and data.

In order to access the admin panel on "/admin"

## Run


- MONGO_URI: this is the connection string of your MongoDB database.

Now you can run "npm start" in the terminal and the application should work.

## Technology

The application is built with:

- React version 17.0.2
- Node.js version 12.16.3
- Mongoose version 6.1.8
- Firebase version 9.6.6
- Express version 4.17.2
- Bootstrap version 5.2.0


## Features

The application displays an online store that contains products.

Users can do the following:

- Create an account, login
- Browse available products added by the admin
- Add products to the shopping cart
- Buy products, in order to proceed forward, a user must be logged in
- Display the shopping cart
- The profile contains all the orders a user has made

Admins can do the following:

- Can manage orders, users, products.

## Database

All the models can be found in the models directory created using mongoose.

### User:

- username (String)
- password (String)


### Product:

- title (String)
- imagePath (String)
- description (String)
- price (Number)
- category (ObjectId - a reference to the category)
- createdAt (Date)

### Cart:

- items: an array of objects, each object contains: <br>
  ~ productId (ObjectId - a reference to the product) <br>
  ~ qty (Number) <br>
  ~ price (Number) <br>
  ~ title (String) <br>
- totalQty (Number)
- totalCost (Number)
- user (ObjectId - a reference to the user)
- createdAt
  <br><br>
  
  
### Payment:
  
- Cash On Delivery
- Online Payment(Paypal Payment Gateway)  
  

### Order:

- user (ObjectId - a reference to the user)
- cart (instead of a reference, we had to structure an object identical to the cart)
- address (String)
- paymentId (String)
- createdAt (Date)
- Delivered (Boolean)

  

[Alan Chris Antony](https://github.com/alanchrissantony)

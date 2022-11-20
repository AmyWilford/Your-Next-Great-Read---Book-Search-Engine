# Your-Next-Great-Read---Book-Search-Engine

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents:

- [Description](#description)
- [Technologies-Used](#technologies-used)
- [Required Additional Technologies](#required-additional-technologies) 
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)

## Description:
This application will help you find your next great read. An online search engine to find books (via google books api). Users have the option to create a personal acount to save interesting books to a personal list - which can be added to - or removed from - at any time when the user is logged in. 

This a refractoring project, with original code provided as a RESTful API - and rewritten as a GraphQL API built using Apollo Server.

Refreactured elements included:
1. Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.
2.  Modify the existing authentication middleware so that it works in the context of a GraphQL API.
3. Create an Apollo Provider so that requests can communicate with an Apollo Server.
4. Deploy your application to Heroku with a MongoDB database using MongoDB Atlas

## Technologies Used:

- MongoDB
- Mongoose
- graphql
- apollo-server-express
- apollo/client
- jwt-decode
- react
- express.js
- jsonwebtoken
- bcrypt
- Google Books API

## Installation:
This application can be used live at deployed site linked below. No installation required. If you plan to using a local copy of this code - you will need to install all package.json packages and dependencies (npm i).

## Usage:
Upon page load - users are presented with a search page where they can look up books from Google Books API and see the author and synopsis. Users have the option to create an account (or login to an existing account). Once logged in, books can be saved to a personal reading list by clicking the 'save book' button at the bottom of each book entry. Books can be added or removed from the reading list at any time as long as the user is logged in. 

## Demo:

[Vide deployed Site on Heroku]()



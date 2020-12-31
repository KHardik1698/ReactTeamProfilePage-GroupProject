# React Routing Employee Card rendering with Nodejs Backend API

This repository contains a Project in which Employee Cards are rendered using the NodeJS Backend API and Frontend is made using React.\
To get a particular Employee's Profile Page, rendering is done using React Routing.

# API End Points:

The Endpoint to get all the Employee cards:

    /

Here, we will get all the employee cards if we use this endpoint.

The Endpoint to get a particular Employee Profile Page by Id:

    /employees/employeeId

Here , we will get the particular Employee's Profile page at this endpoint.

Any invalid endpoint will lead to 404 Page Not Found.

# Data Source:

The data is stored in json file in the Nodejs backend.

# Main Component in Backend:

The Main Component is responsible for starting the Node Express Server on Localhost at the Port number 5000.\
The other function of the Main Component is to redirect any request on "/" to the Routes Component.

# Routes Component in Backend:

The Routes Component is used to process any request received on "/".\
Depending on the request route(path) & the http request type, the router will redirect the process to it's equivalent Controllers.

# Controllers Component in Backend:

The Controllers Component is used to process the request, perform some operations depending on the type of request, & send back a response, either a Success Response or an Error Response.\
The Controller for the Endpoint "/" will return all the Employee Objects if the Employees are present, otherwise it will return an Error Message.\
The Controller for the Endpoint "/employeeId" will return the Employee Object with matching Id if the Employee is present, otherwise it will return an Error Message.

# Main Component in Frontend:

The Main Component is responsible for running the react project on Localhost at the Port number 3000.

# Routes Component in Frontend:

The Routes Component will display the content which is there in "/" endpoint.\
Depending on the request route(path), the router will redirect the process to it's equivalent Routes.

# Components in Frontend:

There are Navigation and Footer Components which display the header and footer component respectively.\
The header and footer Components are displayed on all the pages.

- # Pages:

  This will display all the page modules present in this folder.
  It contains Home Page, Profile Page and Not found Page.

- # Routers:
  This file contains all the routes. The routes are given to the component,based on the which the page will be displayed according to the endpoint.

# To run the Project:

- ## For Frontend:

  Navigate into Frontend folder.\
  Then run this command only once:

      nmp install

  To install all the dependencies.

  Then run the command:

      npm run start

  To start the React Server whenever you need to see the Webpage.

- ## For Backend:

  Navigate into Backend folder.\
  Then run this command only once:

      nmp install

  To install all the dependencies.

  Then run the command:

      npm run start

  To start the Backend Server whenever you need to send a get api request to the Server.

  Or the Backend is also hosted on Heroku.\
  This link can also be used to send a get api request.\
  [Link for Backend](https://employee-card-backend.herokuapp.com/employees)

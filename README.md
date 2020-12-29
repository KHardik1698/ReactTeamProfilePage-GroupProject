# React Routing Employee Card rendering with Backend API

This repository contains a Project in which Employee cards are rendered using the nodeJS API and front end is done using React. To get particular Employee's Profile Page , on to the next page React Routing concept is used.

# API End Points:

The Endpoint to get all the Employee cards:

```
 /home
```

Here, we will get all the employee cards if we use this endpoint.
The Endpoint to get a particular Employee Profile Page by Id:

```
/home/employeeId
```

Here , we will get the particular Employee's Profile page at this endpoint.

### Data Source:

The data is stored in json file in the Nodejs backend.

### Main Component in Backend:

The Main Component is responsible for starting the Node Express Server on Localhost at the Port number 5000.
The other function of the Main Component is to redirect any request on "/" to the Routes Component.

### Routes Component in Backend:

The Routes Component is used to process any request received on "/".
Depending on the request route(path) & the http request type, the router will redirect the process to it's equivalent Controllers.

### Controllers Component in Backend:

The Controllers Component is used to process the request, perform some operations depending on the type of request, & sending back a response, either a Success Response or an Error Response.
The Controller for the Endpoint "/" will return all the Employee Objects if the Employees are present, otherwise it will return an Error Message.
The Controller for the Endpoint "/employeeId" will return the Employee Object with matching Id if the Employee is present, otherwise it will return an Error Message.

### Main Component in Frontend:

The Main Component is responsible for running the react project on Localhost at the Port number 3000.

### Routes Component in Frontend:

The Routes Component will display the content which is there in "/" endpoint.
Depending on the request route(path), the router will redirect the process to it's equivalent Controllers.

### Components in Frontend:

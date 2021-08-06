# RestFul Back-End Services with Express.js

## General Description
This repo contains the source code of back-end services for the company websites of  **PT Inti Konten Indonesia.**  It's built to serve the company profile through a single page webapp in an **rest api architecture** . The services developed in ` node.js ` using the ` express.js ` frameworks. The services uses ` MongoDB ` as its only database. 

## Patterns & Implementation
Despite of using express.js as it's frameworks and implements its base workflow, this service has some additional implementation & patterns built upon its development. Such as follow :
1. Most of the configurable variables and information stored in ` .src/conf/info.js ` .
2. Each routes logistics stored in dependent files located at ` ./src/app/routes/ `. 
3. Helper functions are used to do different specific task by routes as a middleware. Helper functions are stored as dependent files at ` ./src/app/helper `.
4. Processed data between middlewares is stored at a temporary variable of the response object named 'storage'. This could be found at ` ./conf/info.js `.
5. The ` send() ` middlewares sends the data stored on ` res.storage ` as the response of the request.
6. The collections list is initiated once at the starts of the application by calling ` initCollection() `, if a certain collection is already formed, the initiation is skipped.
7. The ` connection.js ` function is used to build a connection to the database server. It takes a callback function as its parameter, which will be calledback and given the database instance as it's parameter.
8. The server select the targeted collections automatically by checking the request routes, this is done by acessing the ` req.baseUrl ` property and replacing the '/' with ''.

## Admin Access

## Routes

## Configuration

## Usage (How to run?)

## Dependencies

## Who


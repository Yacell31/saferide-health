
# Authentication Microservice

This project is an authentication microservice built with Next.js, MongoDB, AWS Amplify, Tailwind CSS, and TypeScript. It provides user authentication functionality, allowing users log in, and access protected routes. An api it's provided as well to access the users collection.

## Table of Contents

    
  * Features
  * Technologies Used
  * MongoDB 
  * API Route
  * Application Route
  * Swagger
  * Local Development
    

## Features

  User Login: Existing users can log in using their registered credentials.
  Protected Routes: Certain routes are protected and can only be accessed by authenticated users.
  Welcome Page: Upon successful login, users are redirected to a welcome page.
  Error Handling: Proper error handling and validation are implemented for user input.

## Technologies Used

  * Next.js: React framework for server-side rendering and building web applications.
  * MongoDB: NoSQL database for storing user data.
  * AWS Amplify: Cloud development platform for deploying and managing the application.
  * Tailwind CSS: Utility-first CSS framework for styling the user interface.
  * TypeScript: Typed superset of JavaScript for enhanced developer experience.


## Development

To run the authentication microservice locally for development purposes, follow these steps:

 Clone the repository and navigate to the project directory.
  * Install the project dependencies:
    * npm install
  * Start the development server:
    * npm run dev
  * The application will be accessible at http://localhost:3000.

## MongoDB
     The microservice uses MongoDB as the database for storing user information.     

## API Route

  The microservice includes an API route for testing purposes. The API route can be accessed at /api/test. It returns a sample JSON response and can be used to verify the backend functionality.
  To access the API route, make an HTTP POST request to https://https://main.d1zkbejbsbsjmu.amplifyapp.com/api/getUser. Send me an email to request credentials.

## Application Route
  Live URL for accessing:  https://main.d1zkbejbsbsjmu.amplifyapp.com/

## Swagger Documentation
https://main.d1zkbejbsbsjmu.amplifyapp.com/api/docs

## Contributing
  Contributions are welcome! If you have any suggestions, bug fixes, or feature requests, please open an issue or submit a pull request.

## License
  This project is licensed under the MIT License.

**SIMULATED S3 SERVER**

This project consists of a simulated server for the Amazon Simple Storage Service (S3) using only local files as storage. The server implements basic S3 operations such as GET, POST, and DELETE for object manipulation.

**PROJECT STRUCTURE:**

- **CONTROLLERS/INDEX.JS:** This file exports the server's controllers.
- **CONTROLLERS/ITEMSCONTROLLER.JS:** Contains the controllers for item manipulation.
- **MODELS/ITEMMODEL.JS:** Defines the item model used in the server.
- **ROUTES/INDEX.JS:** Defines the server's routes.
- **ROUTES/ITEMSROUTES.JS:** Contains specific routes for item manipulation.
- **APP.JS:** Main file of the server, responsible for setting up and starting the server.
- **STORAGE:** Directory used as storage for objects.
- **PACKAGE.JSON AND PACKAGE-LOCK.JSON:** Node.js configuration files.

**SERVER FUNCTIONALITIES:**

1. **GET:** Receives a GET request, retrieves the requested object from the storage folder, and returns it as a response.
2. **POST:** Upon receiving a POST request, saves the file contained in the request to the storage folder.
3. **DELETE:** If a DELETE request is received, deletes the specified file from the storage folder.

**LIBRARIES USED:**

- **EXPRESS:** Used to configure and create the HTTP server.
- **FS:** Node.js native library for file manipulation.
- **BODY-PARSER:** Used to parse the body of HTTP requests.
- **PATH:** Used for file and directory path manipulation.

**HOW TO RUN:**

1. Clone the repository to your local machine.
2. Install dependencies using the command `npm install`.
3. Start the server using the command `node app.js`.

**LICENSE:**

This project is licensed under the MIT License. See the LICENSE file for more information.

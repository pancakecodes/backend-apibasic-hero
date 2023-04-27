# backend-apibasic-hero

<p>A REST API built with Express, TypeORM, Node.js, mssql, Postman, and TypeScript that provides basic CRUD (Create, Read, Update, Delete) operations for a hero entity.</p>

<h2>Installation</h2>
<ol>
<li>Clone the repository: git clone https://github.com/pancakecodes/backend-apibasic-hero.git</li>
<li>Navigate to the project directory: cd backend-apibasic-hero</li>
<li>Install dependencies: npm install</li>
<li>Create a .env file at the root of the project with the following environment variables:
PORT=3000
DB_HOST=localhost
DB_PORT=1433
DB_USERNAME=<your-database-username>
DB_PASSWORD=<your-database-password>
DB_NAME=<your-database-name></li>
<li>Replace <your-database-username>, <your-database-password>, and <your-database-name> with your database credentials.</li>
<li>Start the development server: npm run dev</li>
<li>Open your browser and go to http://localhost:3000 to ensure that the server is running.</li>
</ol>

<h2>API Endpoints</h2>
<ul>
  <li>  GET /heroes - Get a list of all heroes</li>
 <li>   GET /heroes/:id - Get a hero by ID</li>
   <li> POST /heroes - Create a new hero</li>
  <li>  PUT /heroes/:id - Update a hero by ID</li>
 <li>   DELETE /heroes/:id - Delete a hero by ID</li>
</ul>
<h2>Technologies</h2>
<ul>
<li>    Express - Web framework for Node.js</li>
<li>    TypeORM - Object-relational mapping library for TypeScript</li>
  <li>  Node.js - JavaScript runtime for building server-side applications</li>
  <li>  mssql - Microsoft SQL Server client for Node.js</li>
 <li>   Postman - Collaboration platform for API development</li>
   <li> TypeScript - Typed superset of JavaScript</li>
</ul>
<h2>Folder structure</h2>
<ul>
   <li> src - Contains the source code for the application.</li>
    <li>    config - Contains the configuration files used by the application, such as the database configuration.</li>
     <li>   controllers - Contains the Express controllers for each API endpoint.</li>
      <li>  entities - Contains the TypeORM entity classes for each database table.</li>
      <li>  middlewares - Contains the Express middleware functions used by the application.</li>
      <li>  routes - Contains the Express router for each API endpoint.</li>
      <li>  index.ts - The entry point of the application.</li>
</ul>
<h2>Contributing</h2>

<p>Contributions are always welcome! If you'd like to contribute to this project, please follow these steps:</p>
<ol>
 <li>   Fork the repository.</li>
 <li>   Clone your forked repository to your local machine.</li>
<li>    Create a new branch for your changes.</li>
 <li>   Make your changes and commit them with a descriptive commit message.</li>
<li>    Push your changes to your forked repository.</li>
 <li>   Open a pull request to this repository with a clear description of your changes.</li>
</ol>
<h2>License</h2>

<p>This project is licensed under the MIT License. See the LICENSE file for details.</p>

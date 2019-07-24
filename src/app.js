'use strict';

/**
 * API Server Module
 * @module src/app
 */

const cwd = process.cwd();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require( `${cwd}/src/middleware/500.js`);
const notFound = require( `${cwd}/src/middleware/404.js` );
const v1Router = require( `${cwd}/src/api/v1.js` );
const swagger = require(`${cwd}/src/api/swagger.js`);
const app = express();

//Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/docs', express.static('docs'));

// Routes
app.use(v1Router);

// Error Handlers
app.use(notFound);
app.use(errorHandler);

/**
 * Start Server on specified port
 * @param port {integer} (defaults to process.env.PORT)
 */
let start = (port = process.env.PORT) => {
  app.listen(port, () => {
    console.log(`Server Up on ${port}`);
  });
};

module.exports = {app,start};

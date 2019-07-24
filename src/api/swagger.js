const express = require('express');
const swaggerServer = express();
const expressSwagger = require('express-swagger-generator')(swaggerServer);

let options = {
  swaggerDefinition: {
    info: {
      description: 'API Server',
      title: 'Swaggertastic Docs!',
      version: '1.0.1',
    },
    host: 'localhost:3000',
    basePath: '',
    produces: [
      'application/json',
    ],
    schemes: ['http'],
    securityDefinitions: {
      basicAuth: {
        type: 'basic',
      },
    },
  },
  basedir: __dirname,
  files: ['./*.js'],
};
expressSwagger(options);
swaggerServer.listen(3333);

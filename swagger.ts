

import { Options } from "swagger-jsdoc";

export const swaggerOptions: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Authentication MicroService",
      version: "1.0.0",
      description: "Authentication Microservice. SafeRide Health.",
    },
  },
  apis: ['./pages/api/**/*.ts'], 
};

export default swaggerOptions;
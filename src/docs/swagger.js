import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
const opts = {
  definition: {
    openapi: '3.1.0',
    info: { title: 'MyProject API', version: '1.0.0' },
    servers: [{ url: 'http://localhost:3000/api' }]
  },
  apis: ['./src/apis/**/*.routes.js']
}
export const swaggerSpec = swaggerJsdoc(opts)
export const setupSwagger = (app) =>
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

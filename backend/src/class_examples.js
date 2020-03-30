const express = require('express');

const app = express();

app.use(express.json());

/**
 * Routes / Resources
 * 
 */

/**
 * HTTP Methods
 *  GET: Search/list an info in back-end
 *  POST: Create an info in back-end
 *  PUT: Alter an info in back-end
 *  DELETE: Delete an info in back-end
 */


 /**
  * Parameter types:
  * 
  * Query Params: Parameters named after "?" (filters, paging)
  * Route Params: Params used to identify resources
  * Request body: Requisition body. Used to alter or create resources
  * 
  */

/**
 * Accessing through Query Params:
 * 
 * Enter localhost:3333/query_parms?name=Bruno&id:2
 */
app.get('/query_parms', (request, response) => {
  const params = request.query;

  console.log(params);

  return response.send('Hello ' + params.name + '!');
});

/**
 * Accessing through Route Params:
 * 
 * Enter localhost:3333/route_params/bruno
 */

app.get('/route_params/:name', (request, response) => {
  const params = request.params;
  console.log(params);
  return response.send('Hello ' + params.name + '!');
});

/**
 * Acessing through body params
 * 
 * Post a json like 
 * 
 * {
 *    "name": "Bruno Schettini",
 *    "id": 2
 * }
 */
app.post('/body_params', (request, response) => {
  const body = request.body;
  console.log(body);
  return response.send('Hello ' + body.name + '!');
});



/**
 * Databases
 * 
 * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
 *
 * NoSQL: MongoDB, CouchDQ, etc
 */


 /**
  * Database Access
  * Driver: Install the DB driver in the machine
  *         Example: SELECT * FROM users
  * 
  * Query Builder: Using a node library, Can be integrated with any SQL driver.
  *         Example: table('users).select('*).where('<condition>')
  *         Knex: After install type `npx knex init`
  */
  

app.listen(3333);
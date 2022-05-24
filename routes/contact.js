
const express = require('express');
// import all the functions from Controllers.js
const { GetContact, PostNewContact, UpdateContact, DeleteContact, GetContactById } = require('../controlles/controllers');

const ContactRouter = express.Router();



/* Get all user */

ContactRouter.get('/',GetContact)

/* post user using Router.post() */

ContactRouter.post('/',PostNewContact)

/* update user by id using Router.put()*/

ContactRouter.put ('/:id',UpdateContact)

/* Delete user by id  using Router.delete()*/

ContactRouter.delete('/:id',DeleteContact)

/* Get a user by id using Router.get() */

ContactRouter.get('/:id',GetContactById)

/* export the module to use it in another part of our app  */

module.exports = ContactRouter;
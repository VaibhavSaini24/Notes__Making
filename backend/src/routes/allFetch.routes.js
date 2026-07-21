const express = require('express');
const routes =  express.Router();
const fetchee = require('../controller/fetch.controller')

routes.get("/notes", fetchee.getNotes);
routes.delete("/deleteall", fetchee.deleteAll);


module.exports = routes;
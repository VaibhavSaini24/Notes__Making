const express = require('express');
const routes = express.Router();
const updatedd = require('../controller/update.controller');


routes.patch("/update/:id", updatedd.updateOne);

routes.delete("/delete/:id", updatedd.deleteOne);



module.exports = routes;
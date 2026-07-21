const express = require('express');
const routes = express.Router();
const Post = require('../controller/note.controller')

routes.post("/create", Post.createPost);

module.exports = routes;
const noteModel = require('../models/notes.model')
const mongoose = require('mongoose')

async function createPost(req,res){

   const {title,description } = req.body;
   const notes = await noteModel.create({
     title,
     description
   });
   res.status(201).json({
    message: "Notes Added to Database",
    notes
   })

 }

module.exports = {createPost};
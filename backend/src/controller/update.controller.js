
const NoteModel = require('../models/notes.model');


async function updateOne(req,res){
   const id = req.params.id;
   const {title,description} = req.body;
   const result =  await NoteModel.findByIdAndUpdate({_id: id},
    {$set: {title: title, 
           description: description
    } }, {new: true} )

    res.status(200).json({
        message: "Notes Updated Sucessfull"
    })
}

async function deleteOne(req,res){
   const id =  req.params.id;
   const delet =  await NoteModel.findOneAndDelete({_id: id});
   res.status(200).json({
    message: "Notes Deleted Succesfully"
   })
}


module.exports = {updateOne,deleteOne}


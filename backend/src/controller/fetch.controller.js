const NoteModel = require('../models/notes.model');

function getAll() {
    return NoteModel.find({});
}

async function getNotes(req, res) {
    try {
        const notesData = await getAll();
        res.status(200).json(notesData);
    } catch (error) {
        res.status(500).json({
            message: 'Failed to fetch notes',
            error: error.message,
        });
    }
}

async function deleteAll(req, res) {
    try {
        const result = await NoteModel.deleteMany({});

        res.status(200).json({
            message: 'Deleted all notes',
            deleted: result.deletedCount,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to delete notes',
            error: error.message,
        });
    }
}

module.exports = { getNotes, deleteAll };

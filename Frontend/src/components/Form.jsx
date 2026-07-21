import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';


function Form() {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [notes, setNotes] = useState([]);
    const [Ed,setEd] = useState(null);
   
    useEffect(() => {
        fetchNotes();
    }, [createNotes, Updated])

     function handleTitleChange(e) {
        setTitle(e.target.value);
    }
    function handleMessageChange(e) {
        setMessage(e.target.value);
    }
    function prevent(e) {
        e.preventDefault();
    }

    async function fetchNotes() {
        try {
            const res = await axios.get("http://localhost:3000/api/notes");
            setNotes(res.data);
        } catch (err) {
            console.log("Error in getting the api");
        }
    }
    async function createNotes() {
        if (title == '' || message == '') {
            return alert("Titile or Task not be Empty");
        }
        await axios.post("http://localhost:3000/api/create", {
            title: title,
            description: message
        });
        setTitle('');
        setMessage(''); 
         fetchNotes();
    }
    async function deleteAll() {
        const res = await axios.delete("http://localhost:3000/api/deleteall");
        fetchNotes();
    }

    function UpdateText(id, title, description) {
        setTitle(title);
        setMessage(description);
        setEd(id);
    }

    async function Updated() {
        if (!Ed) {
           return alert("Select a note to update");
        }

        await axios.patch(`http://localhost:3000/api/update/${Ed}`, {
            title: title,
            description: message
        });
        setTitle('');
        setMessage('');
        setEd(null);
        fetchNotes();
    }

    async function deleteid(id) {
        const res = await axios.delete(`http://localhost:3000/api/delete/${id}`);
        fetchNotes();
    }

    return (
        <div className="min-h-screen bg-gray-950 px-4 py-8 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl rounded-3xl border border-amber-500/20 bg-gray-900 p-6 shadow-2xl shadow-amber-950/30 sm:p-8">
                <div className="mb-6 rounded-2xl border border-amber-500/20 bg-gray-800/90 p-5 shadow-lg shadow-black/20">
                    <h2 className="text-2xl font-bold text-amber-400">Manage Your Notes</h2>
                    <p className="mt-2 text-sm text-gray-300">Create, view, and organize your tasks in one place.</p>
                </div>

                <form onSubmit={prevent} className="rounded-2xl border border-amber-500/20 bg-gray-800 p-5 shadow-lg shadow-black/20">
                    <div className="space-y-4">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-amber-400">Title</label>
                            <input placeholder='Title..'
                                onChange={handleTitleChange}
                                value={title}
                                type="text"
                                className="w-full rounded-xl border border-gray-700 bg-gray-900 px-3 py-2 text-base font-medium text-amber-100 placeholder:text-gray-500 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-amber-400">Task</label>
                            <input
                                placeholder='Write task here...   '
                                onChange={handleMessageChange}
                                value={message}
                                id="description"
                                className="w-full rounded-xl border border-gray-700 bg-gray-900 px-3 py-2 text-base font-medium text-amber-100 placeholder:text-gray-500 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30"
                            />
                        </div>

                    <div className="flex flex-wrap gap-3">
                      <button onClick={createNotes} className="rounded-xl bg-amber-500 px-4 py-2 font-semibold text-gray-950 transition hover:bg-amber-800" type="button">
                                Add Notes
                      </button>
                       <button onClick={deleteAll} className="rounded-xl text-white bg-red-500 px-4 py-2 font-semibold transition hover:bg-amber-400" type="button">
                                Delete All
                            </button>
                        <button onClick={Updated} className="rounded-xl text-white bg-green-500/75 px-4 pl-4 font-semibold transition hover:bg-amber-400" type="button">
                                Update
                            </button>
                        </div>
                    </div>
                </form>

                <div className="mt-6 rounded-2xl border border-amber-500/20 bg-gray-800/80 p-4 shadow-inner shadow-black/20">
                    <div className="flex flex-wrap gap-4">
                        {notes.length > 0 ? notes.map((note) => (
                            <div
                                className="flex h-48 w-full flex-col justify-between rounded-2xl border border-amber-200/20 bg-gray-900 p-4 shadow-md shadow-amber-950/30 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]"
                                key={note._id}
                            >
                                <div>
                                    <h3 className="text-lg font-semibold text-amber-400">{note.title}</h3>
                                    <p className="mt-2 text-sm text-gray-300">{note.description}</p>
                                </div>

                                <div className="mt-4 flex gap-2">
                                    <button onClick={() => deleteid(note._id)} className="flex-1 rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-900">
                                        Delete
                                    </button>
                                    <button onClick={() => UpdateText(note._id, note.title, note.description)} className="flex-1 rounded-lg bg-amber-500 px-3 py-2 text-sm font-medium text-gray-950 transition hover:bg-amber-400">
                                        Edit
                                    </button>
                                </div>
                            </div>
                        )) : <p className="text-gray-400">No notes yet</p>}
                    </div>
                </div>
            </div>
        </div>
    )
   }

export default Form;

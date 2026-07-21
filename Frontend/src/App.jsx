import React, { useEffect, useState } from 'react';
import './index.css';
import Form from './components/Form';
import axios from 'axios';


function App() {
  return (
    <div className="min-h-screen bg-gray-950 px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-center text-3xl font-bold tracking-wide text-amber-400 sm:text-4xl">
          Notes App
        </h1>
        <Form />
      </div>
    </div>
  )
}

export default App;
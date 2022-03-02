

import { useEffect, useState } from 'react';
import './App.css';
import { nanoid } from "nanoid";
//import AddNote from './components/AddNote';
import Header from './components/Header';
//import Note from './components/Note';
import Search from './components/Search';
import NotesList from './components/NotesList';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "The Product is awesome!!",
      date: "15/02/2022",
    },
    {
      id: nanoid(),
      text: "Value for money",
      date: "23/02/2022",
    },
    {
      id: nanoid(),
      text: "Room for improvement!",
      date: "28/02/2022",
    },
    {
      id: nanoid(),
      text: "didn't meet the expectations!",
      date: "28/02/2022",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };


  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;

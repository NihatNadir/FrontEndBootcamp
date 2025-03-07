import { useState } from "react";

function Note() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [selectedColor, setSelectedColor] = useState("#f06292");
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

  const colors = ["#f06292", "#ba68c8", "#ffeb3b", "#64b5f6", "#8bc34a"];

  const addNote = () => {
    if (noteText.trim() !== "") {
      setNotes([...notes, { text: noteText, color: selectedColor }]);
      setNoteText("");
    }
  };

  const updateNote = () => {
    if (noteText.trim() !== "" && selectedNoteIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[selectedNoteIndex] = { text: noteText, color: selectedColor };
      setNotes(updatedNotes);
      setNoteText("");
      setSelectedNoteIndex(null);
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((note, i) => i !== index); // Seçilen index dışındaki notları tut
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleNoteClick = (note, index) => {
    setNoteText(note.text);
    setSelectedColor(note.color);
    setSelectedNoteIndex(index);
  };

  return (
    <div className="app-container">
      <div className="container">
        <h1>NotesApp</h1>

        <input
          type="text"
          placeholder="Search..."
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <div className="note-input-container">
          <textarea
            placeholder="Enter your note here..."
            className="note-textarea"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          />
          <div className="note-footer">
            <div className="color-picker">
              {colors.map((color) => (
                <button
                  key={color}
                  className={`color-button ${selectedColor === color ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                >
                  {selectedColor === color && <span className="tick">✔</span>}
                </button>
              ))}
            </div>
            <button className="add-btn" onClick={selectedNoteIndex === null ? addNote : updateNote}>
              {selectedNoteIndex === null ? "ADD" : "UPDATE"}
            </button>
          </div>
        </div>

        <div className="notes-container">
          {filteredNotes.map((note, index) => (
            <div
              key={index}
              className="note"
              style={{ backgroundColor: note.color }}
              onClick={() => handleNoteClick(note, index)} 
            >
              <div className="note-content">
                {note.text}
                {/* Silme butonu */}
                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // Butona tıklanması notun seçilmesini engellemesin
                    deleteNote(index);
                  }}
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Note;
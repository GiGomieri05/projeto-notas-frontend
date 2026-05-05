import { useState, useEffect } from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { getNotes, createNote, updateNote, deleteNote } from './api';

// Componente raiz. Gerencia o estado global da aplicação.
// Estado necessário:
//   - notes: array com todas as notas
//   - noteToEdit: nota selecionada para edição (null = modo criação)
//   - loading: booleano para indicar carregamento

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingNote, setEditingNote] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getNotes();
        setNotes(data);
      } catch (err) {
        setError('Erro ao carregar notas. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const handleCreate = async (data) => {
    const newNote = await createNote(data);
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setShowForm(false);
  };

  const handleUpdate = async (id, data) => {
    const updatedNote = await updateNote(id, data);
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === id ? updatedNote : note))
    );
    setEditingNote(null);
    setShowForm(false);
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleEdit = (note) => {
    setEditingNote(note);
    setShowForm(true);
  };

  const handleCancelEdit = () => {
    setEditingNote(null);
    setShowForm(false);
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Gerenciador de Notas</h1>
      {!showForm && (
        <button onClick={() => setShowForm(true)}>Nova Nota</button>
      )}
      {showForm && (
        <NoteForm
          note={editingNote}
          onSubmit={editingNote ? handleUpdate : handleCreate}
          onCancel={handleCancelEdit}
        />
      )}
      <NoteList
        notes={notes}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;

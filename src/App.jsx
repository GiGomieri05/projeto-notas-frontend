import { useState, useEffect } from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { getNotes, createNote, updateNote, deleteNote } from './api';
import './App.css';

// Componente raiz. Gerencia o estado global da aplicação.
// Estado necessário:
//   - notes: array com todas as notas
//   - noteToEdit: nota selecionada para edição (null = modo criação)
//   - loading: booleano para indicar carregamento

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  
  const renderContent = () => {
    if (loading) {
      return <div className="loading-state">Carregando notas...</div>;
    }

    if (error) {
      return <div className="error-state">{error}</div>;
    }

    return (
      <NoteList
        notes={notes}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    );
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Minhas Notas</h1>
        {!showForm && (
          <button
            className="btn btn-primary"
            onClick={() => setShowForm(true)}
          >
            Nova Nota
          </button>
        )}
      </header>
      {showForm && (
        <NoteForm
          initialData={null}
          onSubmit={handleCreate}
          onCancel={() => setShowForm(false)}
        />
      )}
      {renderContent()}
    </div>
  );
}

export default App;

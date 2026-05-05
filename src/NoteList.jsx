import NoteCard from './NoteCard';

// Renderiza a lista de todas as notas.
// Props esperadas:
//   - notes: array de objetos nota
//   - onDelete: função repassada para cada NoteCard
//   - onUpdate: função repassada para cada NoteCard

function NoteList({ notes, onDelete, onUpdate }) {
  if (notes.length === 0) {
    return <div className="empty-state">Nenhuma nota encontrada.</div>;
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default NoteList;

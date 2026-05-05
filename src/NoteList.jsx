import NoteCard from './NoteCard';

// Renderiza a lista de todas as notas.
// Props esperadas:
//   - notes: array de objetos nota
//   - onEdit: função repassada para cada NoteCard
//   - onDelete: função repassada para cada NoteCard

function NoteList({ notes, onEdit, onDelete }) {
  if (notes.length === 0) {
    return <div className="empty-state">Nenhuma nota encontrada.</div>;
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default NoteList;

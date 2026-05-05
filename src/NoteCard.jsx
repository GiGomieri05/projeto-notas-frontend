// Exibe os dados de uma única nota.
// Props esperadas:
//   - note: objeto com { id, title, content, created_at }
//   - onEdit: função chamada ao clicar em "Editar", recebe o objeto note
//   - onDelete: função chamada ao clicar em "Excluir", recebe o id da nota

function NoteCard({ note, onEdit, onDelete }) {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja excluir esta nota?')) {
      onDelete(note.id);
    }
  };

  return (
    <div className="note-card">
      <h3 className="note-title">{note.title}</h3>
      <p className="note-content">{note.content}</p>
      {note.created_at && (
        <p className="note-date">Criado em: {formatDate(note.created_at)}</p>
      )}
      <div className="note-actions">
        <button className="btn btn-edit" onClick={() => onEdit(note)}>
          Editar
        </button>
        <button className="btn btn-delete" onClick={handleDelete}>
          Excluir
        </button>
      </div>
    </div>
  );
}

export default NoteCard;

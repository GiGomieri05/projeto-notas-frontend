import { useState } from 'react';

// Exibe os dados de uma única nota.
// Props esperadas:
//   - note: objeto com { id, title, content, created_at }
//   - onEdit: função chamada ao clicar em "Editar", recebe o objeto note
//   - onDelete: função chamada ao clicar em "Excluir", recebe o id da nota
//   - onUpdate: função chamada ao salvar a edição, recebe (id, { title, content })

function NoteCard({ note, onEdit, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [validationError, setValidationError] = useState('');

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

  const handleEdit = () => {
    setIsEditing(true);
    setTitle(note.title);
    setContent(note.content);
    setValidationError('');
  };

  const handleSave = () => {
    if (!title.trim() || !content.trim()) {
      setValidationError('Título e conteúdo são obrigatórios.');
      return;
    }

    setValidationError('');
    onUpdate(note.id, { title: title.trim(), content: content.trim() });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTitle(note.title);
    setContent(note.content);
    setValidationError('');
  };

  return (
    <div className="note-card">
      {isEditing ? (
        <div className="inline-edit-form">
          {validationError && <p className="form-error">{validationError}</p>}
          <div className="form-group">
            <label htmlFor={`title-${note.id}`}>Título:</label>
            <input
              id={`title-${note.id}`}
              type="text"
              className="form-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Digite o título"
            />
          </div>
          <div className="form-group">
            <label htmlFor={`content-${note.id}`}>Conteúdo:</label>
            <textarea
              id={`content-${note.id}`}
              className="form-textarea"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Digite o conteúdo"
              rows={4}
            />
          </div>
          <div className="form-actions">
            <button className="btn btn-primary" onClick={handleSave}>
              Salvar
            </button>
            <button className="btn btn-cancel" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <>
          <h3 className="note-title">{note.title}</h3>
          <p className="note-content">{note.content}</p>
          {note.created_at && (
            <p className="note-date">Criado em: {formatDate(note.created_at)}</p>
          )}
          <div className="note-actions">
            <button className="btn btn-edit" onClick={handleEdit}>
              Editar
            </button>
            <button className="btn btn-delete" onClick={handleDelete}>
              Excluir
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default NoteCard;

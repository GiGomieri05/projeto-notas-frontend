import { useState, useEffect } from 'react';

// Formulário para criar uma nova nota ou editar uma nota existente.
// Props esperadas:
//   - initialData: objeto { title, content } ou null (null = modo criação)
//   - onSubmit: função chamada ao submeter o formulário com { title, content }
//   - onCancel: função chamada ao cancelar a edição

function NoteForm({ initialData, onSubmit, onCancel }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setContent(initialData.content || '');
    } else {
      setTitle('');
      setContent('');
    }
    setValidationError('');
  }, [initialData]);

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      setValidationError('Título e conteúdo são obrigatórios.');
      return;
    }

    setValidationError('');
    onSubmit({ title: title.trim(), content: content.trim() });
    setTitle('');
    setContent('');
  };

  const isEditing = !!initialData;

  return (
    <div className="note-form-container">
      <h2 className="note-form-title">{isEditing ? 'Editar nota' : 'Nova nota'}</h2>
      {validationError && <p className="form-error">{validationError}</p>}
      <div className="form-group">
        <label htmlFor="title">Título:</label>
        <input
          id="title"
          type="text"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Digite o título"
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Conteúdo:</label>
        <textarea
          id="content"
          className="form-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Digite o conteúdo"
          rows={4}
        />
      </div>
      <div className="form-actions">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Salvar
        </button>
        <button className="btn btn-cancel" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default NoteForm;

// Exibe os dados de uma única nota.
// Props esperadas:
//   - note: objeto com { id, title, content, created_at }
//   - onEdit: função chamada ao clicar em "Editar", recebe o objeto note
//   - onDelete: função chamada ao clicar em "Excluir", recebe o id da nota

function NoteCard({ note, onEdit, onDelete }) {
  // TODO: exibir title, content e created_at formatado
  // TODO: chamar onEdit(note) ao clicar no botão Editar
  // TODO: chamar onDelete(note.id) ao clicar no botão Excluir

  return (
    <div>
      {/* Título da nota */}
      {/* Conteúdo da nota */}
      {/* Data de criação formatada */}
      {/* Botão Editar */}
      {/* Botão Excluir */}
    </div>
  );
}

export default NoteCard;

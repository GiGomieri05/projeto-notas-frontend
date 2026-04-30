import NoteCard from './NoteCard';

// Renderiza a lista de todas as notas.
// Props esperadas:
//   - notes: array de objetos nota
//   - onEdit: função repassada para cada NoteCard
//   - onDelete: função repassada para cada NoteCard

function NoteList({ notes, onEdit, onDelete }) {
  // TODO: exibir mensagem quando não houver notas
  // TODO: mapear o array notes e renderizar um NoteCard para cada item

  return (
    <div>
      {/* Mapear notes e renderizar <NoteCard> para cada nota */}
      {/* Exibir "Nenhuma nota encontrada." quando o array estiver vazio */}
    </div>
  );
}

export default NoteList;

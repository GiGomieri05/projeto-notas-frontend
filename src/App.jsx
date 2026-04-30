import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { getNotes, createNote, updateNote, deleteNote } from './api';

// Componente raiz. Gerencia o estado global da aplicação.
// Estado necessário:
//   - notes: array com todas as notas
//   - noteToEdit: nota selecionada para edição (null = modo criação)
//   - loading: booleano para indicar carregamento

function App() {
  // TODO: inicializar os estados com useState
  // TODO: buscar todas as notas da API ao montar o componente (useEffect + getNotes)
  // TODO: handleCreate → chama createNote, atualiza o estado notes
  // TODO: handleUpdate → chama updateNote, atualiza o estado notes
  // TODO: handleDelete → chama deleteNote, remove a nota do estado notes
  // TODO: handleEdit   → define noteToEdit para abrir o formulário em modo edição
  // TODO: handleCancel → limpa noteToEdit

  return (
    <div>
      {/* Título principal da aplicação */}
      {/* <NoteForm> para criar ou editar uma nota */}
      {/* <NoteList> para exibir todas as notas */}
    </div>
  );
}

export default App;

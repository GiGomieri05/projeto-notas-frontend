// Formulário para criar uma nova nota ou editar uma nota existente.
// Props esperadas:
//   - noteToEdit: objeto da nota a ser editada (null quando for criação)
//   - onSubmit: função chamada ao submeter o formulário com { title, content }
//   - onCancel: função chamada ao cancelar a edição

function NoteForm({ noteToEdit, onSubmit, onCancel }) {
  // TODO: controlar os campos title e content com useState
  // TODO: preencher os campos quando noteToEdit não for null (modo edição)
  // TODO: chamar onSubmit com { title, content } ao submeter
  // TODO: chamar onCancel ao clicar no botão cancelar

  return (
    <form>
      {/* Campo de título */}
      {/* Campo de conteúdo (textarea) */}
      {/* Botão de submit (Salvar / Criar) */}
      {/* Botão de cancelar (visível apenas no modo edição) */}
    </form>
  );
}

export default NoteForm;

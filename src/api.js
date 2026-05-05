const BASE_URL = 'https://projeto-notas-9lze.onrender.com/api/notes';

// Retorna todas as notas (GET /api/notes)
export async function getNotes() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar notas:', error);
    throw error;
  }
}

// Cria uma nova nota (POST /api/notes)
// body: { title, content }
export async function createNote(data) {
  try {
    console.log('Enviando POST para:', BASE_URL, 'com dados:', data);
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log('Resposta recebida:', response.status);
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Erro HTTP:', response.status, errorText);
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao criar nota:', error);
    throw error;
  }
}

// Atualiza uma nota existente (PUT /api/notes/:id)
// body: { title, content }
export async function updateNote(id, data) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao atualizar nota:', error);
    throw error;
  }
}

// Deleta uma nota (DELETE /api/notes/:id)
export async function deleteNote(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao deletar nota:', error);
    throw error;
  }
}

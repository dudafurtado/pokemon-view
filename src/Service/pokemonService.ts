const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

export async function listPokemon() {
  const response = await fetch(BASE_URL, {
    method: 'GET',
  });

  const data = await response.json();

  return { data, ok: response.ok };
}

export async function showPokemon(id: number) {
    const response = await fetch(BASE_URL + id, {
        method: 'GET',
    })

    const data = await response.json();

  return { data, ok: response.ok };
}

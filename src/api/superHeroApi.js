export const BASE_URL = 'https://akabab.github.io/superhero-api/api';

export async function fetchHeroes() {
  const res = await fetch(`${BASE_URL}/all.json`);
  return await res.json();
}

export async function fetchHeroById(id) {
  const res = await fetch(`${BASE_URL}/id/${id}.json`);
  return await res.json();
}
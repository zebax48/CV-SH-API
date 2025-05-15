export const BASE_URL = 'https://akabab.github.io/superhero-api/api/all.json';

export async function fetchHeroes() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching heroes:', error);
    throw error;
  }
}
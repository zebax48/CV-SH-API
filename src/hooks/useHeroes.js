import { useState, useEffect } from 'react';
import { fetchHeroes } from '../api/superHeroApi';

export default function useHeroes() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHeroes()
      .then(setHeroes)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { heroes, loading };
}
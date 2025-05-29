import { useEffect, useState } from 'react';
import { fetchHeroById } from '../api/superHeroApi';

export default function useHeroById(id) {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    fetchHeroById(id)
      .then(setHero)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  return { hero, loading };
}
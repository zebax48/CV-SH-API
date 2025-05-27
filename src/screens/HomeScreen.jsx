import { useEffect, useState } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import HeroList from '../components/HeroList';
import { fetchHeroes } from '../api/superHeroApi';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchHeroes()
      .then(setHeroes)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <ScrollView>
      <HeroList heroes={heroes} onSelect={(id) => navigation.navigate('Hero', { id })} />
    </ScrollView>
  );
}
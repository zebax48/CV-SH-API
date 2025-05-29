import { ScrollView, ActivityIndicator } from 'react-native';
import HeroList from '../components/HeroList';
import { useNavigation } from '@react-navigation/native';
import useHeroes from '../hooks/useHeroes';

export default function HomeScreen() {
  const {heroes, loading} = useHeroes();
  const navigation = useNavigation();

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <ScrollView>
      <HeroList heroes={heroes} onSelect={(id) => navigation.navigate('Hero', { id })} />
    </ScrollView>
  );
}
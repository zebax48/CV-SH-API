import { Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import styles from '../styles/heroStyles';
import useHeroById from '../hooks/useHeroById';

export default function HeroDetailScreen({ route }) {
  const { id } = route.params;
  const { hero, loading } = useHeroById(id);

  if (loading) return <ActivityIndicator size="large" />;

  if (!hero) return <Text>No hero found.</Text>;

  return (
    <ScrollView contentContainerStyle={styles.detail}>
      <Image source={{ uri: hero.images.md }} style={styles.image} />
      <Text style={styles.name}>{hero.name}</Text>
      <Text style={styles.detailText}>Full Name: {hero.biography.fullName}</Text>
      <Text style={styles.detailText}>Publisher: {hero.biography.publisher}</Text>
      <Text style={styles.detailText}>Gender: {hero.appearance.gender}</Text>
      <Text style={styles.detailText}>Race: {hero.appearance.race}</Text>
      <Text style={styles.detailText}>Height: {hero.appearance.height.join(', ')}</Text>
      <Text style={styles.detailText}>Weight: {hero.appearance.weight.join(', ')}</Text>
    </ScrollView>
  );
}

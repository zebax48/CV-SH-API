import { Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/heroStyles';

export default function HeroCard({ hero, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(hero.id)}>
      <Image source={{ uri: hero.images.md }} style={styles.image} />
      <Text style={styles.name}>{hero.name}</Text>
    </TouchableOpacity>
  );
}
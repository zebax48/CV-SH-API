import { View } from 'react-native';
import HeroCard from './HeroCard';
import styles from '../styles/heroStyles';

export default function HeroList({ heroes, onSelect }) {
  return (
    <View style={styles.container}>
        {heroes.map(hero => (
            <HeroCard key={hero.id} hero={hero} onPress={onSelect} />
        ))}
    </View>
  );
}
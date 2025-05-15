import React from 'react';
import styles from '../styles/heroStyles.module.css';

export default function HeroCard({ hero, onClick }) {
  return (
    <div className={styles.card} onClick={() => onClick(hero)}>
      <img src={hero.images.md} alt={hero.name} className={styles.image} />
      <h3 className={styles.name}>{hero.name}</h3>
    </div>
  );
}
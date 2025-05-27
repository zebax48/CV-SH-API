import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  card: {
    margin: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  name: {
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 16,
  },
  detail: {
    alignItems: 'center',
    padding: 20,
  },
  detailText: {
    fontSize: 16,
    marginVertical: 4,
  },
});

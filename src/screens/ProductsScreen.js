import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import products from '../data/products';

const ProductsScreen = ({ navigation }) => {
  // const navigation = useNavigation();

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate('Product Details')}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: '50%',
    padding: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default ProductsScreen;

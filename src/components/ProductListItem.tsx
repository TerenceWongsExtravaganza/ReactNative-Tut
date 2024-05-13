import { StyleSheet, Text, View, Image } from 'react-native';

import { Product } from '../types';
import Colors from '../constants/Colors';

export const defaultImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png'
type ProductListItemProps = {
    product: Product;
}

const ProductListItem = ({product}: ProductListItemProps) => {
    return (
      <View style={styles.container}>
        <Image source = {{uri:product.image || defaultImage}} style = {styles.image}/>
        <Text style = {styles.title}>{product.name}</Text>
        <Text style = {styles.price}>${product.price}</Text>
      </View>
    );
  }

export default ProductListItem;

const styles = StyleSheet.create({
    container:{
      backgroundColor: 'white',
      padding : 10,
      borderRadius: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    price: {
      fontSize: 15,
      color: Colors.light.tint,
      fontWeight: 600,
    },
    image: {
      width:'40%',
      aspectRatio:1
    }
  });
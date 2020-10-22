import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { ProductCard } from './ProductCard';
import ProductService from '../../service/ProductService';

export const ProductList = ({ navigation, term }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    ProductService.getProducts({term})
      .then((products) => setData(products))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const getImageUrl = (image) => {
    return image.sizes[0].url;
  }

  const renderItem = ({ item }) => {
    return (
      <ProductCard
        title={item.name}
        content={item.shortDescription}
        imageUrl={getImageUrl(item.image)}
        minPrice={item.minimumPriceString}
        maxPrice={item.maximumPriceString}
        navigation={navigation}
      />
    )
  }

  return (
    <>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </>
  )
}

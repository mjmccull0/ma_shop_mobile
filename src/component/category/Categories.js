import React from 'react';
import { FlatList } from 'react-native';
import {  List } from 'react-native-paper';
import { ProductList } from '../product/ProductList';

export const Categories = ({ navigation, route }) => {
  const { categories, path, taxonomy } = route.params;

  if (categories.length === 0) {
    // Return product list given selected categories.
    return (
      <ProductList
        navigation={navigation}
        term={taxonomy}
      />
    );
  }

  const renderItem = ({ item }) => {
    return (
      <List.Item
        title={item.name}
          onPress={() => {
            navigation.push('Categories', {
              name: item.name,
              categories: item.subCategories,
              path: `${path} > ${item.name}`,
              taxonomy: [...taxonomy, item.name]
            })
          }} 
      />
    )
  }

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  )
}

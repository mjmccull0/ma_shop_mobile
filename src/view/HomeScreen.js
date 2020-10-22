import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductList } from '../component/product/ProductList';

const HomeStack = createStackNavigator();

export const HomeScreen = () => {
  return (
    <>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={HomeScreenView}
        />
      </HomeStack.Navigator>
    </>
  );
}

const HomeScreenView = ({ navigation }) => {
  return (
    <ProductList
      navigation={navigation}
    />
  )
}

import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryService from '../service/CategoryService';
import { Categories } from '../component/category/Categories';

const Stack = createStackNavigator();

export const CategoryScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    CategoryService.getCategories()
      .then((categories) => setData(categories))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <View style={{flex:1, justifyContent: "center"}}>
        {isLoading ? <ActivityIndicator /> : (
          <Stack.Navigator>
            <Stack.Screen
              name="Categories"
              component={Categories}
              options={({ route }) =>  ({ title: route.params.path })}
              initialParams={{
                categories: data,
                path: 'Category',
                taxonomy: []
              }}
             />
          </Stack.Navigator>
        )}
      </View>
    </>
  );
}

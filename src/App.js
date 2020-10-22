import 'react-native-gesture-handler';
import 'react-native-url-polyfill/auto';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  DarkTheme as ProvidedTheme,
  Provider as PaperProvider
} from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeScreen } from './view/HomeScreen';
import { CategoryScreen } from './view/CategoryScreen';


/**
 * see https://callstack.github.io/react-native-paper/theming.html
 * for futher details of each of the below.
*/
const theme = {
  ...ProvidedTheme,
  colors: {
    ...ProvidedTheme.colors,
  }
}

function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <AppTabs theme={theme} />
      </NavigationContainer>
    </PaperProvider>
  );
}

const Tab = createMaterialBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({ color }) => (
            <Icon name="shape" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default App;

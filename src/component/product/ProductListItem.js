import React from 'react';
import { List } from 'react-native-paper';

export const ProductListItem = (props) => {
  return (
    <List.Item 
      title={props.name}
    />
  )
}

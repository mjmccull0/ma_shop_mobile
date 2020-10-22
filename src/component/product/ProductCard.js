import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

export const ProductCard = (props) => {
  const { navigation, title, content, imageUrl, minPrice, maxPrice } = props;
  let price;
  if (minPrice === maxPrice) {
    price = minPrice;
  } else {
    price = `${minPrice} - ${maxPrice}`;
  }

  return (
    <Card style={{ margin: 20 }}>
      <Card.Cover source={{ uri: imageUrl }} />
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{content}</Paragraph>
        <Paragraph>{price}</Paragraph>
      </Card.Content>
    </Card>
  )
};

import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {ListItem, Left, Thumbnail, Body, Right, Text} from 'native-base';

const CartItem = props => {
  const {item} = props;
  const [quantity, setQuantity] = useState(item.quantity);
  return (
    <ListItem style={styles.listItem} key={Math.random()} avatar>
      <Left>
        <Thumbnail
          source={{
            uri: item.item.product.image
              ? item.item.product.image
              : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',
          }}
          style={{backgroundColor: 'black', margin: 0}}
        />
      </Left>
      <Body style={styles.body}>
        <Left>
          <Text>{item.item.product.name}</Text>
        </Left>
        <Right>
          <Text>$ {item.item.product.price}</Text>
        </Right>
      </Body>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CartItem;

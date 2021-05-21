import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Content, Left, Body, ListItem, Thumbnail, Text} from 'native-base';

var {width, height} = Dimensions.get('window');

const ProductSearch = props => {
  const {productsFiltered} = props;
  return (
    <Content style={{width: width, heigth: height}}>
      {productsFiltered.length > 0 ? (
        productsFiltered.map(item => {
          return (
            <ListItem
              key={item._id}
              avatar
              onPress={() => {
                props.navigation.navigate('Product Detail', {item: item});
              }}>
              <Left>
                <Thumbnail
                  source={{
                    uri: item.image
                      ? item.image
                      : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',
                  }}
                />
              </Left>
              <Body>
                <Text>{item.name}</Text>
                <Text note>{item.description}</Text>
              </Body>
            </ListItem>
          );
        })
      ) : (
        <View>
          <Text style={{alignSelf: 'center'}}>Ningun Producto Encontrado</Text>
        </View>
      )}
    </Content>
  );
};

export default ProductSearch;

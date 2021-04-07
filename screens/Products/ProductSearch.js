import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Content, Left, Body, ListItem, Thumbnail, Text} from 'native-base';

const ProductSearch = props => {
    const {productsFiltered} = props;
    return (
        <Content>
            {productsFiltered.length > 0 ? (
                productsFiltered.map(item) => {
                    <ListItem
                        key={item._id}
                        avatar
                    >
                        <Left>
                            <Thumbnail 
                                source =  {products.image ? products.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}
                            />
                        </Left>
                        <Body>
                            <Text>{item.name}</Text>
                            <Text note >{item.description}</Text>
                        </Body>
                    </ListItem>
                }
            ) : (
                <View>
                    <Text style = {{alignSelf: 'center'}}>Ningun Producto Encontrado</Text>
                </View>
            )}
        </Content>
    );
};

export default ProductSearch;

import React from 'react';
import {StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {ListItem, Badge, Text, Button} from 'native-base';
import FilterButton from './FilterButton';
const CategoriesFilter = props => {
  const {categories, filterByCategory, productsCtg, active, setActive} = props;
  return (
    <ScrollView
      bounces={true}
      horizontal={true}
      style={{backgroundColor: '#f2f2f2'}}>
      <ListItem style={{margin: 0, padding: 0, borderRadius: 0}}>
        {/* TODO: Esta es la categoria ALL, definir como se va a implementar de una manera optima.*/}
        {/* <TouchableOpacity
          key={1}
          onPress={() => {
            filterByCategory('all');
            setActive(-1);
          }}>
          <Badge
            style={[
              styles.center,
              {margin: 5},
              active == -1 ? styles.active : styles.inactive,
            ]}>
            <Text style={{fontWeight: 'bold'}}>Todas</Text>
          </Badge>
        </TouchableOpacity> */}
        {categories.map(category => {
          return (
            <FilterButton
              margin={10}
              size={75}
              backgroundColor="white"
              category={category}
              filterByCategory={filterByCategory}
              setActive={setActive}
              active={active}
              key={category._id}
            />
          );
        })}
      </ListItem>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoriesFilter;

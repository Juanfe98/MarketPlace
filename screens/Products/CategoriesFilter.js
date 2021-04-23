import React from 'react';
import {StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {ListItem, Badge, Text} from 'native-base';

const CategoriesFilter = props => {
  const {categories, filterByCategory, productsCtg, active, setActive} = props;
  return (
    <ScrollView
      bounces={true}
      horizontal={true}
      style={{backgroundColor: '#f2f2f2'}}>
      <ListItem style={{margin: 0, padding: 0, borderRadius: 0}}>
        <TouchableOpacity
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
        </TouchableOpacity>
        {categories.map(category => {
          return (
            <TouchableOpacity
              key={category._id}
              onPress={() => {
                filterByCategory(category._id);
                setActive(category._id);
              }}>
              <Badge
                style={[
                  styles.center,
                  {margin: 7},
                  active == category._id ? styles.active : styles.inactive,
                ]}>
                <Text style={{fontWeight: 'bold'}}>{category.name}</Text>
              </Badge>
            </TouchableOpacity>
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
  active: {
    backgroundColor: '#03bafc',
  },
  inactive: {
    backgroundColor: '#a0e1eb',
  },
});

export default CategoriesFilter;

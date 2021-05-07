import React from 'react';
import {StyleSheet, TouchableOpacity, ScrollView, View} from 'react-native';
import {ListItem, Text, Body, Left} from 'native-base';
import FilterButton from './FilterButton';
const CategoriesFilter = props => {
  const {categories, filterByCategory, productsCtg, active, setActive} = props;
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Selecciona la Categoría</Text>
        <TouchableOpacity
          onPress={() => {
            filterByCategory('all');
            setActive(-1);
          }}>
          <Text style={styles.allCategoriesText}>Ver Todas</Text>
        </TouchableOpacity>
      </View>
      <ScrollView bounces={true} horizontal={true}>
        <ListItem style={{margin: 0, padding: 0, borderRadius: 0}}>
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
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 25,
    marginRight: 20,
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  allCategoriesText: {
    color: '#FE7F63',
    fontSize: 14,
  },
});

export default CategoriesFilter;

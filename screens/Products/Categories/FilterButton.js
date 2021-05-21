import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, Text, View} from 'react-native';

function FilterButton(props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        marginBottom: 100,
      }}>
      <TouchableOpacity
        style={{
          margin: props.margin,
          height: props.size,
          width: props.size,
          backgroundColor:
            props.active == props.category._id ? '#FF6D4E' : 'white',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: props.size * 2,
        }}
        key={props.category._id}
        onPress={() => {
          props.filterByCategory(props.category._id);
          props.setActive(props.category._id);
        }}>
        <Icon
          name={props.category.icon}
          size={props.size / 2}
          color={props.active == props.category._id ? 'white' : '#B3B3C3'}
        />
      </TouchableOpacity>
      <Text style={{justifyContent: 'center', alignItems: 'center'}}>
        {props.category.name}
      </Text>
    </View>
  );
}

export default FilterButton;

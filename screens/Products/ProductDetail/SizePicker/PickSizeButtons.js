import React from 'react';
import {TouchableOpacity, Text, View, Dimensions} from 'react-native';
// TODO: Mirar si se puede unir este componente con el filtro de categorias para usar solamente uno que sea dinamico con los estilos.
function PickButton(props) {
  const {width} = Dimensions.get('window');
  const {elements, size, setSize} = props;
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {elements.map(element => {
        return (
          <TouchableOpacity
            style={{
              margin: 10,
              height: 40,
              width: width / 6 - 20,
              backgroundColor: 'transparent',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 75 * 2,
              borderWidth: 1,
              borderColor: size === element ? '#3D3D3D' : '#BEBEBE',
            }}
            key={element}
            onPress={() => {
              setSize(element);
            }}>
            <Text>{element}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default PickButton;

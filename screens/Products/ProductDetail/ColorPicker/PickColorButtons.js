import React from 'react';
import {TouchableOpacity, Dimensions, View} from 'react-native';
// TODO: Mirar si se puede unir este componente con el filtro de categorias para usar solamente uno que sea dinamico con los estilos.
function PickColorButtons(props) {
  const {width} = Dimensions.get('window');
  const {elements, color, setColor} = props;
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {elements.map(element => {
        return (
          <View
            key={element}
            style={{
              borderColor: color === element ? '#3D3D3D' : '#BEBEBE',
              borderRadius: 20 * 2,
              borderWidth: color === element ? 1 : 0,
              margin: 10,
            }}>
            <TouchableOpacity
              style={{
                margin: 5,
                height: width / 8 - 20,
                width: width / 8 - 20,
                backgroundColor: element,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20 * 2,
              }}
              onPress={() => {
                setColor(element);
              }}
            />
          </View>
        );
      })}
    </View>
  );
}

export default PickColorButtons;

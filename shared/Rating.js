import {Rating} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

const RatingMod = props => {
  const {
    rate = 5,
    imageSize = 40,
    backgroundColor = '#FFFFFF',
    flexPosition = 'flex-start',
    readonly = false,
  } = props;
  console.log(flexPosition);
  return (
    <View
      style={{
        flex: 1,
        alignItems: flexPosition,
      }}>
      <Rating
        imageSize={imageSize}
        readonly={readonly}
        startingValue={rate}
        styles={styles.rating}
        tintColor={backgroundColor}
        ratingBackgroundColor="#ADADAD"
        type="custom"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    backgroundColor: 'transparent',
  },
});

RatingMod.propTypes = {
  rate: PropTypes.number,
  imageSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  flexPosition: PropTypes.string,
  readonly: PropTypes.bool,
};

export default RatingMod;

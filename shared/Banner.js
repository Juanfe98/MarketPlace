import React, {useState, useEffect} from 'react';
import {ScrollView, View, Image, Dimensions, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper/src';

var {width} = Dimensions.get('window');
const Banner = props => {
  const [bannerImages, setBannerImages] = useState([]);

  useEffect(() => {
    setBannerImages([
      'https://images.vexels.com/media/users/3/126443/preview2/ff9af1e1edfa2c4a46c43b0c2040ce52-macbook-pro-touch-bar-banner.jpg',
      'https://pbs.twimg.com/media/D7P_yLdX4AAvJWO.jpg',
      'https://www.yardproduct.com/blog/wp-content/uploads/2016/01/gardening-banner.jpg',
    ]);
    return () => {
      setBannerImages([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            showButtons={false}
            autoplay={true}
            autoplayTimeOut={2}
            style={{height: width / 2}}>
            {bannerImages.map(item => {
              return (
                <Image
                  key={item}
                  source={{uri: item}}
                  resizeMode="contain"
                  style={styles.imageBanner}
                />
              );
            })}
          </Swiper>
          <View style={{height: 20}} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiper: {
    width: width,
    alignItems: 'center',
    marginTop: 10,
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});

export default Banner;

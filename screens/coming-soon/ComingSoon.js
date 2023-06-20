import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const ComingSoon = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        style={styles.content}
        resizeMode="cover"
        source={{
          uri: 'https://source.unsplash.com/utwYoEu9SU8/4887×2759',
        }}>
        <Text style={styles.text1}>Be ready, we are launching soon.</Text>
        <Text style={styles.text2}>Coming Soon</Text>
        <Text style={styles.text3} onPress={() => navigation.navigate('Home')}>
          Back to Home Page
        </Text>
      </ImageBackground>
    </View>
  );
};

export default ComingSoon;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text1: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  text2: {
    letterSpacing: 3,
    textTransform: 'uppercase',
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 20,
    margin: 0,
    color: 'white',
    fontSize: 25,
  },
  text3: {
    textDecorationLine: 'underline',
    marginTop: 10,
    color: 'white',
    fontSize: 15,
  },
});

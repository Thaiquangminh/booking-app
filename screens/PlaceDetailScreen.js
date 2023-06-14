import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

const PlaceDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `Hotel`,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
      headerStyle: {
        backgroundColor: '#003580',
        height: 110,
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
      },
    });
  }, []);
  return (
    <View>
      <Text>PlaceDetailScreen</Text>
    </View>
  );
};

export default PlaceDetailScreen;

const styles = StyleSheet.create({});

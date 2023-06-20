import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import PropertyCard from '../../components/PropertyCard';

const SavedScreen = () => {
  const navigation = useNavigation();
  const { height } = Dimensions.get('window');
  const favoriteHotels = useSelector((state) => state.favorite.favoriteHotels);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Favorite',
      headerTitle: 'Favorite Hotels',
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
      {favoriteHotels.length > 0 ? (
        <ScrollView>
          {favoriteHotels?.map((item) => (
            <PropertyCard property={item} key={item.id} />
          ))}
        </ScrollView>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: (4 * height) / 5,
          }}>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>
            You havent any favorite hotel !!!
          </Text>
        </View>
      )}
    </View>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({});

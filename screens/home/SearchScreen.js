import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { data } from '../../data/data';
import SearchResults from './SearchResults';

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'All Place',
      headerTitle: 'All Place',
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
    <>
      <View style={styles.search}>
        <TextInput
          onChangeText={(text) => setSearchValue(text)}
          placeholder="Enter your Destination"
        />
        <Ionicons name="search-outline" size={24} color="black" />
      </View>
      <SearchResults data={data} searchValue={searchValue} />
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20,
    marginHorizontal: 15,
    borderWidth: 2,
    borderColor: '#CCC',
    borderRadius: 10,
    marginBottom: 30,
  },
});

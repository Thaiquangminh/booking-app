import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);
  return (
    <SafeAreaView>
      <View style={styles.search}>
        <TextInput
          onChangeText={(text) => setSearchValue(text)}
          placeholder="Enter your Destination"
        />
        <Ionicons name="search-outline" size={24} color="black" />
      </View>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal: 15,
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#CCC',
    borderRadius: 10,
  },
});

import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  StyleSheet,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import useDebounceCustom from '../../ultis/useDebounce';

const SearchResults = ({ data, searchValue }) => {
  const navigation = useNavigation();
  const [newData, setNewData] = useState([]);
  const findSearchData = () => {
    const searchData = data.filter((item) => {
      return item.place.toLowerCase().includes(searchValue?.toLowerCase());
    });
    setNewData(searchData);
  };
  useEffect(() => {
    if (searchValue === '') {
      setNewData(data);
    } else {
      findSearchData();
    }
  }, [searchValue]);
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={newData.length === 0 ? data : newData}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={styles.result}
              onPress={() =>
                navigation.navigate('Home', {
                  destination: item.place,
                })
              }>
              <View>
                <Image
                  style={styles.result__image}
                  source={{ uri: item.placeImage }}
                />
              </View>
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.result__place}>{item.place}</Text>
                <Text style={styles.result__shortDescription}>
                  {item.shortDescription}
                </Text>
                <Text style={styles.result__properties}>
                  {item.properties.length} Properties
                </Text>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  result: {
    flexDirection: 'row',
    marginHorizontal: 15,
    gap: 15,
    marginBottom: 15,
  },
  result__image: {
    width: 80,
    height: 80,
  },
  result__place: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  result__shortDescription: {
    marginVertical: 4,
  },
  result__properties: {
    color: 'gray',
    fontSize: 15,
  },
});

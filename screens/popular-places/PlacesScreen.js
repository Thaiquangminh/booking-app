import {
  AntDesign,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
} from 'react-native-modals';
import PropertyCard from '../../components/PropertyCard';
import { data } from '../../data/data';

const PlacesScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const [newData, setNewData] = useState([]);
  const [allHotelByPlace, setAllHotelByPlace] = useState([]);
  const searchValue = route?.params.place;

  const filters = [
    {
      id: 1,
      name: 'Low to High',
    },
    {
      id: 2,
      name: 'High to Low',
    },
  ];
  const handleShowPropetiesByPlace = () => {
    const hotelByPlace = data.filter((item) => item.place === searchValue);
    setNewData(hotelByPlace);
    setAllHotelByPlace(hotelByPlace);
  };

  const handleApplyFilter = () => {
    setModalVisible(false);
    switch (filterValue) {
      case 'Low to High':
        // setNewData(
        //   newData?.map((item) =>
        //     item.properties?.sort((a, b) => {
        //       return a.newPrice - b.newPrice;
        //     })
        //   )
        // );
        const data = newData.map((item) =>
          item.properties.sort((a, b) => {
            return a.avgNewPrice - b.avgNewPrice;
          })
        );
        setNewData(data);
        break;
      case 'High to Low':
        setNewData(
          newData?.map((item) =>
            item.properties?.sort((a, b) => {
              return b.avgNewPrice - a.avgNewPrice;
            })
          )
        );
        break;
    }
  };

  useEffect(() => {
    handleShowPropetiesByPlace();
  }, [searchValue]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'PopularPlace',
      headerTitle: 'Popular Places',
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
      <View>
        <Pressable style={styles.place}>
          <Pressable
            style={styles.place__method}
            onPress={() => setModalVisible(true)}>
            <Ionicons name="swap-horizontal-sharp" size={23} color="black" />
            <Text style={styles.place__method_text}>Sort</Text>
          </Pressable>
          <Pressable style={styles.place__method}>
            <MaterialIcons name="filter-list" size={23} color="black" />
            <Text style={styles.place__method_text}>Filter</Text>
          </Pressable>
          <Pressable
            style={styles.place__method}
            onPress={() =>
              navigation.navigate('Map', {
                hotels: allHotelByPlace,
              })
            }>
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={23}
              color="black"
            />
            <Text style={styles.place__method_text}>Map</Text>
          </Pressable>
        </Pressable>
        <ScrollView>
          {newData?.map((item) =>
            item?.properties?.map((property) => (
              <PropertyCard
                property={property}
                key={property.id}
                rooms={route.params?.rooms}
                adults={route.params?.adults}
                children={route.params?.children}
                selectedDates={route.params?.selectedDates}
              />
            ))
          )}
        </ScrollView>
      </View>
      {/* ----------- MODAL FILTERS ------------ */}
      <BottomModal
        onTouchOutside={() => setModalVisible(false)}
        visible={isModalVisible}
        modalTitle={<ModalTitle title="Sort and Filter" />}
        footer={
          <ModalFooter>
            <ModalButton text="Apply" onPress={handleApplyFilter} />
          </ModalFooter>
        }>
        <ModalContent style={{ width: '100%', height: 280 }}>
          <Pressable style={{ flexDirection: 'row' }}>
            <Pressable
              style={{
                flex: 2,
                borderRightWidth: 1,
                height: 280,
                borderColor: '#e0e0e0',
              }}>
              <Text style={{ padding: 10, fontSize: 20 }}>Sort</Text>
            </Pressable>
            <Pressable style={{ flex: 3 }}>
              <View>
                {filters.map((filter) => (
                  <Pressable
                    onPress={() => setFilterValue(filter.name)}
                    key={filter.id}
                    style={{
                      flexDirection: 'row',
                      padding: 10,
                      alignItems: 'center',
                    }}>
                    {filterValue.includes(filter.name) ? (
                      <AntDesign name="checkcircle" size={21} color="green" />
                    ) : (
                      <Entypo name="circle" size={21} color="black" />
                    )}
                    <Text style={{ marginLeft: 10 }}>{filter.name}</Text>
                  </Pressable>
                ))}
              </View>
            </Pressable>
          </Pressable>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({
  place: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
  place__method: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  place__method_text: {
    marginLeft: 5,
  },
});

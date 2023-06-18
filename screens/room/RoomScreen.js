import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import RoomCard from '../../components/RoomCard';
import { useSelector } from 'react-redux';
import { services } from '../../data/data';

const RoomScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selected, setSelected] = useState([]);
  const handleSelect = (room) => {
    !selected.some((item) => item.name === room.name) &&
      setSelected([...selected, room]);
  };
  const handleSetSelect = (value) => {
    setSelected(value);
  };

  const nameHotel = useSelector((state) => state.booking.nameHotel);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Available Rooms',
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
      <ScrollView>
        <View>
          {route.params.property.rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              services={services}
              selected={selected}
              handleSelect={handleSelect}
              handleSetSelect={handleSetSelect}
            />
          ))}
        </View>
      </ScrollView>
      {selected.length > 0 && (
        <Pressable
          style={styles.room__btn}
          onPress={() =>
            navigation.navigate('Contact', {
              selected: selected,
              property: route.params?.property,
              selectedDates: route.params?.selectedDates,
              rooms: route.params?.rooms,
              adults: route.params?.adults,
              children: route.params?.children,
            })
          }>
          <Text style={styles.room__btn_text}>Reserve</Text>
        </Pressable>
      )}
    </>
  );
};

export default RoomScreen;

const styles = StyleSheet.create({
  // ------------ BUTTON --------------
  room__btn: {
    backgroundColor: '#6CB4EE',
    marginBottom: 30,
    paddingVertical: 20,
  },
  room__btn_text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 600,
    fontSize: 17,
  },
});

import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import RoomCard from '../../components/RoomCard';

const RoomScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selected, setSelected] = useState([]);
  const handleSelect = (name) => {
    !selected.some((item) => item.name === name) &&
      setSelected([...selected, name]);
  };
  const handleSetSelect = (value) => {
    setSelected(value);
  };
  const services = [
    {
      id: '0',
      name: 'Room Service',
    },
    {
      id: '2',
      name: 'Free Wifi',
    },
    {
      id: '3',
      name: 'Family Rooms',
    },
    {
      id: '4',
      name: 'Free Parking',
    },
    {
      id: '5',
      name: 'Swimming Pool',
    },
    {
      id: '6',
      name: 'Restaurant',
    },
    {
      id: '7',
      name: 'Fitness Center',
    },
  ];

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

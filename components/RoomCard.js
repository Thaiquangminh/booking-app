import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const RoomCard = ({
  room,
  services,
  selected,
  handleSelect,
  handleSetSelect,
}) => {
  const route = useRoute();
  const handleRemoveSelected = () => {
    selected.some((item) => item.name === room.name) &&
      handleSetSelect(selected.filter((item) => item.name !== room.name));
  };
  return (
    <Pressable style={{ margin: 8, backgroundColor: 'white', padding: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.room__text}>{room.name}</Text>
        <Ionicons name="information-circle-outline" size={22} color="#007FFF" />
      </View>
      <View>
        <Text style={styles.room__payment}>{room.payment}</Text>
        <Text style={styles.room__cancel}>Free cancellation Available</Text>
      </View>
      <View style={styles.room__price}>
        <Text style={styles.room__price_new}>{room.newPrice}</Text>
        <Text style={styles.room__price_old}>{room.oldPrice}</Text>
        <Text style={styles.room__price_cur}>($/h)</Text>
      </View>
      <View style={styles.detail__facilities}>
        <Text style={styles.detail___facilities_title}>
          Most Popular Facilities
        </Text>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {services.map((service) => (
            <View key={service.id} style={styles.detail__facilities_item}>
              <Text style={styles.detail__facilities_name}>{service.name}</Text>
            </View>
          ))}
        </View>
      </View>
      {selected.some((item) => item.name === room.name) ? (
        <Pressable
          style={{
            padding: 10,
            borderWidth: 2,
            borderColor: '#007FFF',
            borderRadius: 10,
            marginTop: 10,
            flexDirection: 'row',
          }}
          onPress={handleRemoveSelected}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 600,
              fontSize: 16,
              color: '#007FFF',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
            SELECTED
          </Text>
          <AntDesign name="checkcircleo" size={19} color="green" />
        </Pressable>
      ) : (
        <Pressable
          style={{
            padding: 10,
            borderWidth: 2,
            borderColor: '#007FFF',
            borderRadius: 10,
            marginTop: 10,
          }}
          onPress={() => handleSelect(room)}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 600,
              fontSize: 16,
              color: '#007FFF',
            }}>
            SELECT
          </Text>
        </Pressable>
      )}
    </Pressable>
  );
};

export default RoomCard;

const styles = StyleSheet.create({
  room__text: {
    fontSize: 19,
    fontWeight: 600,
    color: '#007FFF',
  },
  room__payment: {
    marginTop: 2,
    fontStyle: 'italic',
    fontSize: 14,
  },

  room__cancel: {
    marginTop: 6,
    color: 'green',
    fontSize: 15,
  },

  room__price: {
    flexDirection: 'row',
    marginVertical: 7,
  },

  room__price_new: {
    fontSize: 26,
  },

  room__price_old: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    textDecorationColor: 'red',
    marginLeft: 3,
  },

  room__price_cur: {
    marginLeft: 5,
    fontSize: 24,
  },

  // ------------ FACILITIES --------------
  detail__facilities: {
    marginVertical: 7,
  },
  detail__facilities_item: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: '#007FFF',
    borderRadius: 10,
    marginVertical: 10,
    marginRight: 10,
  },

  detail___facilities_title: {
    fontSize: 15,
    fontWeight: 600,
    marginBottom: 4,
  },
  detail__facilities_name: {
    color: 'white',
    textAlign: 'center',
  },
});

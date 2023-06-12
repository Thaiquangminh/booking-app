import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.header}>
      <Pressable style={styles.header__group}>
        <Ionicons name="bed-outline" size={24} color="white" />
        <Text style={styles.header__group_text}>Stays</Text>
      </Pressable>
      <Pressable style={styles.header__group}>
        <Ionicons name="airplane-outline" size={24} color="white" />
        <Text style={styles.header__group_text}>Flights</Text>
      </Pressable>
      <Pressable style={styles.header__group}>
        <Ionicons name="car-outline" size={24} color="white" />
        <Text style={styles.header__group_text}>Car Rental</Text>
      </Pressable>
      <Pressable style={styles.header__group}>
        <FontAwesome5 name="uber" size={24} color="white" />
        <Text style={styles.header__group_text}>Taxi</Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#003580',
    height: 70,
  },
  header__group: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
    padding: 8,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#a1a6aa',
  },
  header__group_text: {
    marginLeft: 8,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

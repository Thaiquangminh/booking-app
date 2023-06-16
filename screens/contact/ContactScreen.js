import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const ContactScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [totalPrice, setTotalPrice] = useState(null);

  const [infomation, setInfomation] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  });
  const [selectedRooms, setselectedRooms] = useState(route.params.selected);
  console.log(selectedRooms);
  useEffect(() => {
    const rooms = route.params?.property.rooms.filter((room) =>
      selectedRooms.includes(room.name)
    );
    setselectedRooms(rooms);
    selectedRooms.map((room) => {
      setTotalPrice(123);
    });
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Contact',
      headerTitle: 'User Detail',
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
      <View style={styles.contact}>
        <View>
          <View style={styles.contact__group}>
            <Text style={styles.contact__group_text}>First Name</Text>
            <TextInput
              style={styles.contact__group_input}
              onChangeText={(text) =>
                setInfomation({ ...infomation, firstname: text })
              }
            />
          </View>
          <View style={styles.contact__group}>
            <Text style={styles.contact__group_text}>Last Name</Text>
            <TextInput
              style={styles.contact__group_input}
              onChangeText={(text) =>
                setInfomation({ ...infomation, lastname: text })
              }
            />
          </View>
          <View style={styles.contact__group}>
            <Text style={styles.contact__group_text}>Email</Text>
            <TextInput
              style={styles.contact__group_input}
              onChangeText={(text) =>
                setInfomation({ ...infomation, email: text })
              }
            />
          </View>
          <View style={styles.contact__group}>
            <Text style={styles.contact__group_text}>Phone Number</Text>
            <TextInput
              style={styles.contact__group_input}
              onChangeText={(text) =>
                setInfomation({ ...infomation, phone: text })
              }
            />
          </View>
        </View>

        {/* ------------- PRICE AND BTN ---------------- */}
        <Pressable>
          {/* ------------- DIVIDER ----------- */}
          <Text
            style={{
              borderColor: '#E0E0E0',
              height: 1,
              borderWidth: 1,
              marginTop: 18,
              marginBottom: 20,
            }}
          />
          <View style={styles.payment}>
            <View style={styles.payment__price}>
              <Text style={styles.payment__price_total}>
                Total Price: {totalPrice}
              </Text>
              <Text style={styles.payment__price_saved}>You saved: </Text>
            </View>
            <Pressable style={styles.payment__button}>
              <Text
                style={styles.payment__button_text}
                onPress={() =>
                  navigation.navigate('Booking', {
                    property: route.params.property,
                  })
                }>
                Final Step
              </Text>
            </Pressable>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  // ---------------  CONTACT --------------
  contact: {
    borderRadius: 15,
    margin: 10,
    backgroundColor: 'white',
    paddingVertical: 30,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  contact__group: {
    paddingHorizontal: 15,
    gap: 8,
    marginBottom: 20,
  },
  contact__group_text: {
    fontSize: 17,
    // color: '#007FFF',
  },
  contact__group_input: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    borderColor: '#007FFF',
  },

  // ---------------  PAYMENT --------------
  payment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 80,
    alignItems: 'center',
    padding: 20,
  },
  payment__price: {
    flexDirection: 'column',
    gap: 15,
  },
  payment__price_total: {
    fontSize: 18,
    color: '#007FFF',
  },
  payment__price_saved: {
    fontSize: 18,
    color: 'green',
  },
  payment__button: {
    backgroundColor: '#007FFF',
    padding: 15,
    borderRadius: 5,
  },
  payment__button_text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
});

import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '../../components/Divider';
import { addHotel } from '../../redux/bookedHotel/bookedSlice';

const ContactScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(null);
  const [savedPrice, setSavedPrice] = useState(null);
  const [validForm, setValidForm] = useState(false);
  const nameHotel = useSelector((state) => state.booking.nameHotel);

  const [information, setInformation] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  });
  const [selectedRooms, setselectedRooms] = useState(route.params.selected);

  const handleCheckValidate = () => {
    if (
      information.firstname === '' ||
      information.lastname === '' ||
      information.email === '' ||
      information.phone === ''
    ) {
      setValidForm(false);
      Alert.alert('Invalid information', 'Please fill the form correctly', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    } else {
      setValidForm(true);
    }
  };
  const handleSaveBookingHotel = () => {
    handleCheckValidate();
    validForm &&
      dispatch(
        addHotel({
          nameHotel: nameHotel,
          selectedDates: route.params?.selectedDates,
          selectedRooms: route.params.selected,
          rooms: route.params?.rooms,
          adults: route.params?.adults,
          children: route.params?.children,
        })
      );

    validForm &&
      navigation.navigate('Booking', {
        property: route.params.property,
      });
  };
  useEffect(() => {
    const rooms = route.params?.property.rooms.filter((room) =>
      selectedRooms.includes(room.name)
    );
    setselectedRooms(rooms);
    const totalPrice = selectedRooms.reduce((acc, cur) => {
      acc = acc + Number(cur.oldPrice);
      return acc;
    }, 0);
    const newPrice = selectedRooms.reduce(
      (acc, cur) => acc + Number(cur.newPrice),
      0
    );

    setTotalPrice(totalPrice);
    setSavedPrice(totalPrice - newPrice);
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
                setInformation({ ...information, firstname: text })
              }
            />
          </View>
          <View style={styles.contact__group}>
            <Text style={styles.contact__group_text}>Last Name</Text>
            <TextInput
              style={styles.contact__group_input}
              onChangeText={(text) =>
                setInformation({ ...information, lastname: text })
              }
            />
          </View>
          <View style={styles.contact__group}>
            <Text style={styles.contact__group_text}>Email</Text>
            <TextInput
              style={styles.contact__group_input}
              onChangeText={(text) =>
                setInformation({ ...information, email: text })
              }
            />
          </View>
          <View style={styles.contact__group}>
            <Text style={styles.contact__group_text}>Phone Number</Text>
            <TextInput
              style={styles.contact__group_input}
              onChangeText={(text) =>
                setInformation({ ...information, phone: text })
              }
            />
          </View>
        </View>

        {/* ------------- PRICE AND BTN ---------------- */}
        <Pressable>
          <Divider />
          <View style={styles.payment}>
            <View style={styles.payment__price}>
              <Text style={styles.payment__price_total}>
                Total Price: {totalPrice} ($/h)
              </Text>
              <Text style={styles.payment__price_saved}>
                You saved: {savedPrice} ($/h)
              </Text>
            </View>
            <Pressable
              style={styles.payment__button}
              onPress={handleSaveBookingHotel}>
              <Text style={styles.payment__button_text}>Confirm Booking</Text>
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

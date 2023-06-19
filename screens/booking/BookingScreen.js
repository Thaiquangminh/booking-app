import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const ConfirmationScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const bookedHotel = useSelector((state) => state.booking.bookedHotel);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Booking',
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
    <ScrollView>
      <View>
        {bookedHotel.length > 0 ? (
          bookedHotel.map((hotel, indexHotel) =>
            hotel.selectedRooms.map((item, indexRoom) => (
              <Pressable
                key={indexHotel + indexRoom}
                style={{ backgroundColor: 'white', margin: 10 }}>
                <View style={styles.booking}>
                  <View>
                    <Text style={styles.booking__hotelname}>
                      {hotel.nameHotel}
                    </Text>
                    <View style={styles.booking__wraproom}>
                      <Text style={styles.booking__roomname}>{item.name}</Text>
                    </View>
                  </View>

                  <View style={styles.booking__travel}>
                    <Text style={styles.booking__travel_text}>
                      Travel sustainable
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    margin: 12,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 60,
                  }}>
                  <View>
                    <Text style={styles.booking__check}>Check In</Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#007FFF',
                      }}>
                      {hotel.selectedDates.startDate}
                    </Text>
                  </View>

                  <View>
                    <Text style={styles.booking__check}>Check Out</Text>
                    <Text style={styles.booking__check_date}>
                      {hotel.selectedDates.endDate}
                    </Text>
                  </View>
                </View>
                <View style={{ margin: 12 }}>
                  <Text style={styles.booking__check}>Rooms and Guests</Text>
                  <Text style={styles.booking__check_date}>
                    {route.params?.rooms} rooms {route.params?.adults} adults{' '}
                    {route.params?.children} children
                  </Text>
                </View>

                <Pressable style={styles.booking__button}>
                  <Text style={styles.booking__button_text}>Booked</Text>
                </Pressable>
              </Pressable>
            ))
          )
        ) : (
          <Text>You havent booked any hotel !!!</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({
  booking: {
    marginHorizontal: 12,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  booking__hotelname: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  booking__wrapname: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 7,
  },
  booking__roomname: {
    color: '#007FFF',
    fontSize: 17,
  },
  booking__travel: {
    backgroundColor: '#17B169',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 6,
  },
  booking__travel_text: {
    color: 'white',
    fontSize: 13,
  },
  booking__check: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 3,
  },
  booking__check_date: {
    fontSize: 16,
    color: '#007FFF',
  },
  booking__button: {
    backgroundColor: '#003580',
    width: 120,
    padding: 5,
    marginHorizontal: 12,
    marginBottom: 20,
    borderRadius: 4,
  },
  booking__button_text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

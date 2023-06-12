import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DatePicker from '@sabroso/react-native-date-range-picker';
import React, { useEffect, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
} from 'react-native-modals';
import Header from '../components/Header';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setselectedDates] = useState();
  const [isModalVisible, setModalVisible] = useState(false);
  const [rooms, setRooms] = useState(0);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Home',
      headerTitle: 'Booking.com',
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
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ marginRight: 12, marginTop: 6 }}
        />
      ),
    });
  }, []);
  return (
    <>
      <View>
        <Header />
        <View style={styles.home}>
          {/* --------- DESTINATION------------ */}
          <Pressable
            style={styles.home__group}
            onPress={() => navigation.navigate('Search')}>
            <Ionicons name="search-outline" size={24} color="black" />
            <TextInput
              style={styles.home__group_input}
              placeholder="Enter your destination"
            />
          </Pressable>
          {/* --------- DATE ------------ */}
          <Pressable style={styles.home__group}>
            <AntDesign name="calendar" size={24} color="black" />
            <DatePicker
              style={styles.home__group_datepicker}
              customStyles={styles.home__group_customDatepicker} // optional
              allowFontScaling={false} // optional
              placeholder={'Select your date'}
              onConfirm={(startDate, endDate) =>
                setselectedDates(startDate, endDate)
              }
              mode={'range'}
            />
          </Pressable>
          {/* --------- ROOM ------------ */}
          <Pressable
            style={styles.home__group}
            onPress={() => setModalVisible(true)}>
            <Ionicons name="person-outline" size={24} color="black" />
            <TextInput
              readOnly={true}
              placeholderTextColor="red"
              placeholder={`${rooms} room - ${adults} adults - ${children} children`}
            />
          </Pressable>
          {/* --------- SEARCH ------------ */}
          <Pressable style={[styles.home__group, styles.home__group_search]}>
            <Text style={styles.home__group_searchtext}>Search</Text>
          </Pressable>
        </View>

        {/* -------------- ADVERTISING -------------------- */}
        <Text style={styles.title}>Travel More spend less</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginHorizontal: 20 }}>
          <Pressable style={styles.home__advertising}>
            <Text style={styles.home__advertising_title}>Genius</Text>
            <Text style={styles.home__advertising_content}>
              You are ate genius level one in our loyalty program
            </Text>
          </Pressable>

          <Pressable style={styles.home__advertising}>
            <Text style={styles.home__advertising_title}>15% Discounts</Text>
            <Text style={styles.home__advertising_content}>
              Complete 5 stays to unlock level 2
            </Text>
          </Pressable>

          <Pressable style={styles.home__advertising}>
            <Text style={styles.home__advertising_title}>10% Discounts</Text>
            <Text style={styles.home__advertising_content}>
              Enjoy Discounts at participating at properties worldwide
            </Text>
          </Pressable>
        </ScrollView>
        <Pressable
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 200,
              height: 50,
              resizeMode: 'cover',
              marginTop: 20,
            }}
            source={{
              uri: 'https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png',
            }}
          />
        </Pressable>

        {/* --------------------- END ADVERTISING ---------------- */}
      </View>
      <BottomModal
        onTouchOutside={() => setModalVisible(false)}
        swipeDirection={['up', 'down']}
        // swipeThreshold="100"
        visible={isModalVisible}
        footer={
          <ModalFooter>
            <ModalButton text="Apply" onPress={() => setModalVisible(false)} />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select rooms and guests" />}>
        <ModalContent style={{ with: '100%', height: 310 }}>
          <View style={styles.home__modal_rooms}>
            <Text>Rooms</Text>
            <Pressable style={styles.home__modal_count}>
              <Pressable
                style={styles.home__modal_cal}
                onPress={() => setRooms(Math.max(0, rooms - 1))}>
                <Text style={styles.home__modal_caltext}>-</Text>
              </Pressable>
              <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>{rooms}</Text>
              </Pressable>
              <Pressable
                style={styles.home__modal_cal}
                onPress={() => setRooms(rooms + 1)}>
                <Text style={styles.home__modal_caltext}>+</Text>
              </Pressable>
            </Pressable>
          </View>
          <View style={styles.home__modal_rooms}>
            <Text>Adults</Text>
            <Pressable style={styles.home__modal_count}>
              <Pressable
                style={styles.home__modal_cal}
                onPress={() => setAdults(Math.max(0, adults - 1))}>
                <Text style={styles.home__modal_caltext}>-</Text>
              </Pressable>
              <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>{adults}</Text>
              </Pressable>
              <Pressable
                style={styles.home__modal_cal}
                onPress={() => setAdults(adults + 1)}>
                <Text style={styles.home__modal_caltext}>+</Text>
              </Pressable>
            </Pressable>
          </View>
          <View style={styles.home__modal_rooms}>
            <Text>Children</Text>
            <Pressable style={styles.home__modal_count}>
              <Pressable
                style={styles.home__modal_cal}
                onPress={() => setChildren(Math.max(0, children - 1))}>
                <Text style={styles.home__modal_caltext}>-</Text>
              </Pressable>
              <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>{children}</Text>
              </Pressable>
              <Pressable
                style={styles.home__modal_cal}
                onPress={() => setChildren(children + 1)}>
                <Text style={styles.home__modal_caltext}>+</Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  home: {
    marginBottom: 20,
    marginTop: 30,
    marginHorizontal: 20,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 7,
  },
  home__group: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  home__group_search: {
    backgroundColor: '#2a52be',
    justifyContent: 'center',
    paddingVertical: 20,
    borderColor: '#2a52be',
  },
  home__group_input: {
    flex: 1,
  },
  home__group_datepicker: {
    flex: 1,
    height: 30,
    borderRadius: 0,
    borderWidth: 0,
  },
  home__group_searchtext: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  home__group_customDatepicker: {
    placeholderText: {
      fontSize: 14,
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 'auto',
    },
    headerStyle: {
      backgroundColor: '#003580',
    },
    contentText: {
      fontSize: 14,
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 'auto',
    },
  },

  // ----------- MODAL STYLES --------------

  home__modal_rooms: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  home__modal_count: {
    flexDirection: 'row',
    gap: 15,
  },
  home__modal_cal: {
    width: 30,
    height: 30,
    backgroundColor: '#e0e0e0',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home__modal_caltext: {
    fontSize: 15,
  },

  // ----------- ADVERTISING STYLES --------------

  title: {
    marginHorizontal: 20,
    fontSize: 22,
    fontWeight: '500',
    marginTop: 20,
    marginBottom: 12,
  },
  home__advertising: {
    width: 200,
    height: 150,
    marginTop: 10,
    backgroundColor: '#003580',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 3,
  },
  home__advertising_title: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    marginVertical: 7,
  },
  home__advertising_content: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
});

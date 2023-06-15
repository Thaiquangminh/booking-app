import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import calculateDiscount from '../ultis/calculateDiscount';

const PlaceDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const property = route.params?.property;
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
      title: `${route.params?.property.name}`,
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
      <ScrollView>
        <Pressable style={styles.detail__wrapimage}>
          {property.photos.slice(0, 5).map((photo) => (
            <Image
              style={styles.detail__image}
              key={photo.id}
              source={{ uri: photo.image }}></Image>
          ))}
          <Pressable style={styles.detail__more}>
            <Text style={styles.detail__more_text}>Show More</Text>
          </Pressable>
        </Pressable>

        <View style={styles.detail__content}>
          <View>
            <Text style={styles.detail__content_title}>{property.name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome name="star" size={18} color="#fdd128" />
              <Text style={{ marginLeft: 3 }}>{property.rating}</Text>
              <View style={styles.detail__rating_wraptype}>
                <Text style={styles.detail__rating_type}>Genius Level</Text>
              </View>
            </View>
          </View>
          <View style={styles.detail__content_wrapsustain}>
            <Text style={styles.detail__content_textsustain}>
              Travel sustainable
            </Text>
          </View>
        </View>

        {/* ------------- DIVIDER ----------- */}
        <Text
          style={{
            borderColor: '#E0E0E0',
            height: 1,
            borderWidth: 1,
            marginTop: 18,
          }}
        />
        {/* ------------- DIVIDER ----------- */}

        <View style={{ marginTop: 7, marginHorizontal: 10 }}>
          <Text style={styles.detail__check_title}>
            Price for 1 night with {route.params?.adults} adults
          </Text>
          <View style={styles.detail__newprice}>
            <Text style={styles.detail__oldprice}>
              {property.oldPrice * route.params?.adults}
            </Text>
            <Text style={{ fontSize: 22 }}>
              {property.newPrice * route.params?.adults}
            </Text>
          </View>
          <View style={[styles.detail__content_wrapsustain, { width: 80 }]}>
            <Text style={styles.detail__content_textsustain}>
              {calculateDiscount(property.oldPrice, property.newPrice) +
                '% Off'}
            </Text>
          </View>
        </View>

        {/* ------------- DIVIDER ----------- */}
        <Text
          style={{
            borderColor: '#E0E0E0',
            height: 1,
            borderWidth: 1,
            marginTop: 15,
          }}
        />
        {/* ------------- DIVIDER ----------- */}

        <View style={styles.detail__check}>
          <View>
            <Text style={styles.detail__check_title}>Check In</Text>
            <Text style={styles.detail__check_text}>
              {route.params?.selectedDates.startDate}
            </Text>
          </View>
          <View>
            <Text style={styles.detail__check_title}>Check Out</Text>
            <Text style={styles.detail__check_text}>
              {route.params?.selectedDates.endDate}
            </Text>
          </View>
        </View>
        <View style={styles.detail__check_rooms}>
          <Text style={styles.detail__check_title}>Rooms and guest</Text>
          <Text style={styles.detail__check_text}>
            {route.params?.rooms} rooms {route.params?.adults} adults{' '}
            {route.params?.children} children
          </Text>
        </View>

        {/* ------------- DIVIDER ----------- */}
        <Text style={styles.detail__btn_text} />
        {/* ------------- DIVIDER ----------- */}

        <View style={styles.detail__facilities}>
          <Text style={styles.detail__check_title}>
            Most Popular Facilities
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {services.map((service) => (
              <View key={service.id} style={styles.detail__facilities_item}>
                <Text style={styles.detail__facilities_name}>
                  {service.name}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <Pressable style={styles.detail__btn}>
        <Text style={styles.detail__btn_text}>Select Availability</Text>
      </Pressable>
    </View>
  );
};

export default PlaceDetailScreen;

const styles = StyleSheet.create({
  detail__wrapimage: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  detail__image: {
    width: 120,
    height: 80,
    borderRadius: 4,
    margin: 8,
  },
  detail__more: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  detail__more_text: {
    textAlign: 'center',
    marginLeft: 20,
  },
  // ---------- CONTENT -----------
  detail__content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 15,
  },
  detail__content_title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 9,
  },
  detail__content_wrapsustain: {
    backgroundColor: '#17b169',
    paddingVertical: 4,
    paddingHorizontal: 6,
    textAlign: 'center',
    borderRadius: 4,
  },
  detail__content_textsustain: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
  },
  detail__rating_wraptype: {
    backgroundColor: '#003580',
    padding: 4,
    textAlign: 'center',
    borderRadius: 4,
    marginLeft: 10,
  },
  detail__rating_type: {
    color: 'white',
    fontSize: 13,
  },

  detail__newprice: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  detail__oldprice: {
    color: 'red',
    textDecorationLine: 'line-through',
    fontSize: 22,
    marginRight: 10,
  },

  // ------------ CHECK IN CHECKOUT --------------
  detail__check: {
    flexDirection: 'row',
    gap: 60,
    marginHorizontal: 10,
    marginVertical: 8,
  },
  detail__check_title: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 6,
  },
  detail__check_text: {
    fontSize: 15,
    fontWeight: 500,
    color: '#007FFF',
  },
  detail__check_rooms: {
    marginTop: 7,
    marginHorizontal: 10,
  },

  // ------------ FACILITIES --------------
  detail__facilities: {
    marginHorizontal: 12,
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
  detail__facilities_name: {
    color: 'white',
    textAlign: 'center',
  },

  // ------------ BUTTON --------------

  detail__btn: {
    backgroundColor: '#6CB4EE',
    marginTop: 30,
    paddingVertical: 25,
  },
  detail__btn_text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 600,
    fontSize: 17,
  },
});

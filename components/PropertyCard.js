import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import shortenText from '../ultis/shortenText';
import { useNavigation } from '@react-navigation/native';

const PropertyCard = ({ property, adults, rooms, selectedDates, children }) => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');
  return (
    <View style={{ backgroundColor: '#d3d3d3' }}>
      <Pressable
        style={styles.detail}
        onPress={() =>
          navigation.navigate('PlaceDetail', {
            property: property,
            adults: adults,
            rooms: rooms,
            children: children,
            selectedDates: selectedDates,
          })
        }>
        {/* ----------- IMG ----------- */}
        <View>
          <Image
            style={{ width: width - 230, height: height / 3.8 }}
            source={{ uri: property.image }}
          />
        </View>

        {/* ----------- HOTEL DETAILS ----------- */}
        <View style={{ paddingHorizontal: 10, marginTop: 1 }}>
          <View style={styles.detail__title}>
            <Text style={styles.detail__title_text}>{property.name}</Text>
            <MaterialIcons name="favorite-outline" size={24} color="red" />
          </View>
          <View style={styles.detail__rating}>
            <FontAwesome name="star" size={18} color="#fdd128" />
            <Text style={styles.detail__rating_text}>{property.rating}</Text>
            <View style={styles.detail__rating_wraptype}>
              <Text style={styles.detail__rating_type}>Genius Level</Text>
            </View>
          </View>
          <View>
            <Text style={styles.detail__address}>
              {shortenText(property.address, 60)}
            </Text>
          </View>
          <Text style={{ marginTop: 5 }}>
            Price for 1 night with {adults} adults
          </Text>
          <View style={styles.detail__newprice}>
            <Text style={{ fontSize: 24 }}>
              {property.avgNewPrice * adults}
            </Text>

            <Text style={styles.detail__oldprice}>
              {property.avgOldPrice * adults}
            </Text>
            <Text style={styles.detail__price_cur}>($/h)</Text>
          </View>
          <View style={styles.detail__pricetitle}>
            <Text style={styles.detail__pricetitle_text}>
              Hotel Room : {property.rooms.length} rooms
            </Text>
          </View>
          <View style={styles.detail__deal}>
            <Text style={styles.detail__deal_text}>Limited Time Deal</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({
  detail: {
    paddingHorizontal: 2,
    paddingVertical: 9,
    marginVertical: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  detail__title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detail__title_text: {
    minWidth: 180,
    minHeight: 20,
    fontSize: 17,
  },
  // -------- Rating ----------
  detail__rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  detail__rating_text: {
    marginLeft: 3,
  },
  detail__rating_wraptype: {
    backgroundColor: '#6cb4ee',
    padding: 4,
    textAlign: 'center',
    borderRadius: 4,
    marginLeft: 10,
  },
  detail__rating_type: {
    color: '#808080',
    fontSize: 15,
  },

  // -------- Address ----------
  detail__address: {
    marginTop: 6,
    maxWidth: 220,
    color: 'gray',
  },

  // -------- Price ----------
  detail__newprice: {
    flexDirection: 'row',
    marginTop: 5,
  },

  detail__oldprice: {
    color: 'red',
    textDecorationLine: 'line-through',
    marginLeft: 3,
  },
  detail__price_cur: {
    marginTop: 3,
    marginLeft: 5,
    fontSize: 18,
  },

  detail__pricetitle: {
    marginTop: 8,
  },

  detail__pricetitle_text: {
    color: 'gray',
  },

  detail__deal: {
    backgroundColor: '#6082b6',
    paddingVertical: 4,
    width: 130,
    borderRadius: 4,
    textAlign: 'center',
    marginTop: 10,
  },

  detail__deal_text: {
    textAlign: 'center',
  },
});

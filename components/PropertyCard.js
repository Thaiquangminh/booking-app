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

const PropertyCard = ({ property, adults, rooms }) => {
  const { width, height } = Dimensions.get('window');
  return (
    <View style={{ backgroundColor: '#d3d3d3' }}>
      <Pressable style={styles.detail}>
        {/* ----------- IMG ----------- */}
        <View>
          <Image
            style={{ width: width - 230, height: height / 3.8 }}
            source={{ uri: property.image }}
          />
        </View>

        {/* ----------- HOTEL DETAILS ----------- */}
        <View style={{ paddingHorizontal: 10, marginTop: 1 }}>
          <View style={styles.detail__content}>
            <Text style={styles.detail__content_title}>{property.name}</Text>
            <MaterialIcons name="favorite-outline" size={24} color="red" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <FontAwesome name="star" size={18} color="#fdd128" />
            <Text style={{ marginLeft: 3 }}>{property.rating}</Text>
            <View
              style={{
                backgroundColor: '#6cb4ee',
                padding: 4,
                textAlign: 'center',
                borderRadius: 4,
                marginLeft: 10,
              }}>
              <Text style={{ color: '#808080', fontSize: 15 }}>
                Genius Level
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                marginTop: 6,
                maxWidth: 220,
                color: 'gray',
              }}>
              {shortenText(property.address, 60)}
            </Text>
          </View>
          <Text style={{ marginTop: 5 }}>
            Price for 1 night with {adults} adults
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Text style={{ fontSize: 24 }}>{property.newPrice * adults}</Text>

            <Text
              style={{
                color: 'red',
                textDecorationLine: 'line-through',
                marginLeft: 3,
              }}>
              {property.oldPrice * adults}
            </Text>
          </View>
          <View style={{ marginTop: 8 }}>
            <Text style={{ color: 'gray' }}>Hotel Room : 1 bed</Text>
          </View>
          <View
            style={{
              backgroundColor: '#6082b6',
              paddingVertical: 4,
              width: 130,
              borderRadius: 4,
              textAlign: 'center',
              marginTop: 10,
            }}>
            <Text style={{ textAlign: 'center' }}>Limited Time Deal</Text>
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
  detail__content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detail__content_title: {
    minWidth: 180,
    minHeight: 20,
    fontSize: 17,
  },
});

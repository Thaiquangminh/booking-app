import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import React, { useRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const MapScreen = () => {
  const mapView = useRef(null);
  const navigation = useNavigation();
  const route = useRoute();
  const hotels = route.params?.hotels;
  return (
    <View>
      <MapView
        moveOnMarkerPress={false}
        showsUserLocation={true}
        showsCompass={true}
        showsPointsOfInterest={false}
        provider="google"
        ref={mapView}
        style={{ width: '100%', height: '100%' }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <TouchableOpacity>
          <MaterialIcons
            style={styles.map__backbtn}
            onPress={() => navigation.goBack()}
            name="arrow-back-ios"
            size={24}
            color="black"
          />
        </TouchableOpacity>

        {hotels.map((item) =>
          item.properties.map((property) => (
            <Marker
              title={property.name}
              key={property.id}
              coordinate={{
                latitude: Number(property.latitude),
                longitude: Number(property.longitude),
              }}>
              <Text>{property.name}</Text>
            </Marker>
          ))
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  map__backbtn: {
    marginTop: 60,
    marginLeft: 20,
    padding: 10,
    backgroundColor: 'transparent',
    maxWidth: 40,
    textAlign: 'center',
  },
});

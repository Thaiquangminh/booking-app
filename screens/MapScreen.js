import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import React, { useRef } from 'react';
import { useRoute } from '@react-navigation/native';

const MapScreen = () => {
  const mapView = useRef(null);
  const route = useRoute();
  const hotels = route.params?.hotels;
  console.log('hotels', hotels);
  return (
    <View>
      <MapView
        // loadingEnabled={true}
        // loadingIndicatorColor="#666666"
        // loadingBackgroundColor="#eeeeee"
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

const styles = StyleSheet.create({});

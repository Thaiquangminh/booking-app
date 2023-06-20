import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        resizeMode="cover"
        style={{ height: '100%', marginBottom: 35 }}
        source={{
          uri: 'https://img.freepik.com/free-vector/blue-curve-frame-template_53876-114605.jpg?w=2000&t=st=1687277251~exp=1687277851~hmac=67ac658eddeece22663c44978110c9a6f4c12ce1e7b77adb0107c91f2a4620cc',
        }}>
        <View style={styles.profile}>
          <Image
            style={styles.profile__image}
            source={{
              uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png',
            }}></Image>
          <Text style={styles.profile__name}>Minh</Text>
          <Text style={styles.profile__position}>Developer</Text>

          {/* ---------- LOCATION AND WORK ---------- */}
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              marginRight: 45,
            }}>
            <View style={styles.profile__group}>
              <Entypo name="location-pin" size={22} color="black" />
              <Text style={styles.profile__group_text}>Ha Noi, Viet Nam</Text>
            </View>
            <View style={styles.profile__group}>
              <MaterialIcons name="work-outline" size={22} color="black" />
              <Text style={styles.profile__group_text}>VSII</Text>
            </View>
            <View style={styles.profile__group}>
              <MaterialIcons name="mail-outline" size={22} color="black" />
              <Text style={styles.profile__group_text}>
                minh.thaiquang153@gmail.com
              </Text>
            </View>
          </View>

          <Text style={styles.profile__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum arcu a luctus blandit.
          </Text>

          {/* ------------ SOCIAL -------------- */}
          <View style={styles.profile__icon}>
            <Entypo
              name="facebook-with-circle"
              size={26}
              color="black"
              style={styles.profile__icon_detail}
            />
            <Entypo
              name="instagram-with-circle"
              size={26}
              color="black"
              style={styles.profile__icon_detail}
            />
            <Entypo
              name="twitter-with-circle"
              size={26}
              color="black"
              style={styles.profile__icon_detail}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profile: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 30,
  },

  profile__image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#ccc',
  },

  profile__name: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },

  profile__position: {
    fontSize: 18,
    color: '#888',
    marginBottom: 25,
    textAlign: 'center',
  },

  profile__description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
    textAlign: 'center',
    marginTop: 30,
  },

  profile__group: {
    flexDirection: 'row',
    alignItems: 'center',

    padding: 3,
  },

  profile__group_text: {
    fontSize: 15,
    color: '#555',
    marginLeft: 10,
  },

  profile__icon: {
    flexDirection: 'row',
  },

  profile__icon_detail: {
    padding: 5,
    marginHorizontal: 5,
    marginTop: 10,
  },
});

import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Divider = () => {
  return <Text style={styles.divider} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    borderColor: '#E0E0E0',
    height: 1,
    borderWidth: 1,
    marginTop: 18,
    marginBottom: 10,
  },
});

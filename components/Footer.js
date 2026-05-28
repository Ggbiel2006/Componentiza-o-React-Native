import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>© 2026 Meu Projeto - Todos os direitos reservados</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#333333',
    width: '100%',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});
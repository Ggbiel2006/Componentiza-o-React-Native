import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';

// Importando os componentes criados
import Header from './components/Header';
import CustomButton from './components/CustomButton';
import Footer from './components/Footer';

export default function App() {
  
  const handlePressButton1 = () => {
    Alert.alert('Sucesso', 'Botão 1 pressionado!');
  };

  const handlePressButton2 = () => {
    Alert.alert('Sucesso', 'Botão 2 pressionado!');
  };

  return (
    <View style={styles.container}>
      {/* Item 3 da atividade: Terceiro Componente (Header) */}
      <Header title="Atividade de Componentização" />

      <View style={styles.content}>
        {/* Item 1 da atividade: Componente de Botão Reutilizado */}
        <CustomButton title="Enviar Dados" onPress={handlePressButton1} />
        <CustomButton title="Cancelar Operação" onPress={handlePressButton2} />
      </View>

      {/* Item 2 da atividade: Componente de Footer */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
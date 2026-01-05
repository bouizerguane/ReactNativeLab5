// index.tsx
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import ProductList from '../../components/ProductList';

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle="dark-content" />
      <ProductList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#EDEFEE',
  },
});
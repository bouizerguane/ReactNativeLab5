// components/ProductList.tsx
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

// On définit une interface pour le type "Produit"
interface Product {
  id: string;
  name: string;
  price: string;
}

const productsToDisplay: Product[] = [
  { id: 'P01', name: 'Smartphone Nova X', price: '499 MAD' },
  { id: 'P02', name: 'Laptop Pro 15"', price: '1 199 MAD' },
  { id: 'P03', name: 'Casque Bluetooth AirSound', price: '149 MAD' },
  { id: 'P04', name: 'Montre Connectée FitTrack', price: '199 MAD' },
  { id: 'P05', name: 'Clavier Mécanique MX Blue', price: '89 MAD' },
  { id: 'P06', name: 'Souris Gamer LaserX', price: '59 MAD' },
  { id: 'P07', name: 'Écran 27" UltraHD', price: '349 MAD' },
  { id: 'P08', name: 'Disque SSD 1 To', price: '129 MAD' },
  { id: 'P09', name: 'Routeur WiFi 6', price: '179 MAD' },
  { id: 'P10', name: 'Casque VR Immersion', price: '399 MAD' },
  { id: 'P11', name: 'Enceinte Intelligente Echo', price: '99 MAD' },
  { id: 'P12', name: 'Tablette Graphique PenTab', price: '249 MAD' },
  { id: 'P13', name: 'Caméra de Sécurité 4K', price: '159 MAD' },
  { id: 'P14', name: 'Support PC Ventilé', price: '39 MAD' },
  { id: 'P15', name: 'Hub USB-C 8-en-1', price: '45 MAD' },
  { id: 'P16', name: 'Microphone Podcast Pro', price: '129 MAD' },
  { id: 'P17', name: 'Batterie Externe 20000mAh', price: '49 MAD' },
  { id: 'P18', name: 'Lampe de Bureau LED', price: '29 MAD' },
  { id: 'P19', name: 'Adaptateur Bluetooth Voiture', price: '19 MAD' },
  { id: 'P20', name: 'Sac à Dos Ordinateur Antivol', price: '69 MAD' },
];

// Typage des propriétés (props) pour ProductItem
interface ProductItemProps {
  name: string;
  price: string;
}

function ProductItem({ name, price }: ProductItemProps) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemPrice}>{price}</Text>
    </View>
  );
}

export default function ProductList() {
  // item est automatiquement typé grâce au tableau productsToDisplay
  const renderProductItem = ({ item, index }: { item: Product; index: number }) => {
    return (
      <ProductItem
        name={`${index + 1}. ${item.name}`}
        price={item.price}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Catalogue TechMarket</Text>

      <FlatList
        data={productsToDisplay}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEFEE',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 16,
    color: '#333333',
    flex: 1,
    marginRight: 10,
  },
  itemPrice: {
    fontSize: 16,
    color: '#EE9972',
    fontWeight: 'bold',
  },
});
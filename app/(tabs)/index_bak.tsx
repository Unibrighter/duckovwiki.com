import { Link } from 'expo-router'; // 操，把这玩意儿引进来！
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import allItems from '../../data/items.json';

export default function ItemListScreen() {
  const displayItems = allItems.filter(item => item.Category !== 'Character');

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={displayItems}
        keyExtractor={(item) => item.ID.toString()}
        renderItem={({ item }) => (
          // 用 Link 组件把整个卡片包起来
          <Link href={`/items/${item.ID}`} asChild> 
            <View style={styles.itemContainer}>
              <Text style={styles.itemName}>{item.DisplayName}</Text>
              <Text style={styles.itemDescription} numberOfLines={2}>{item.Description}</Text>
              <Text style={styles.itemPrice}>价格: {item.Price}</Text>
            </View>
          </Link>
        )}
      />
    </SafeAreaView>
  );
};

// ... 样式代码不变 ...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  itemContainer: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  itemDescription: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: '#4caf50',
    marginTop: 10,
    fontWeight: 'bold',
  },
});
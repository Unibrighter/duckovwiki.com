import { Link } from 'expo-router'; // 操，把这玩意儿引进来！
import React from 'react';
import { FlatList, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/Card'; // 引入 Card

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
            <Pressable>
              <Card style={{ marginVertical: 8, marginHorizontal: 16, padding: 15 }}>
                <ThemedText type="title">{item.DisplayName}</ThemedText>
                <ThemedText type="subtitle" numberOfLines={2}>{item.Description}</ThemedText>
                <ThemedText type="defaultSemiBold">Price: {item.Price}</ThemedText>
              </Card>
            </Pressable>
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
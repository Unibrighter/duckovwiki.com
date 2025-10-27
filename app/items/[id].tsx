import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import allItems from '../../data/items.json';

export default function ItemDetailScreen() {
  const { id } = useLocalSearchParams(); // 从 URL 里把 id 搞出来

  // 根据 id 找到那个操蛋的物品
  const item = allItems.find((i) => i.ID.toString() === id);

  // 如果没找到，就显示个错误
  if (!item) {
    return <Text style={styles.errorText}>妈的，找不到这个物品！</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: item.DisplayName }} />
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{item.DisplayName}</Text>
          <Text style={styles.description}>{item.Description}</Text>

          <View style={styles.infoBox}>
            <InfoRow label="类别" value={item.Category} />
            <InfoRow label="价格" value={item.Price.toString()} />
            <InfoRow label="重量" value={item.UnitWeight.toString()} />
            <InfoRow label="品质" value={item.Quality.toString()} />
          </View>
          
          {item.Stats && (
            <View style={styles.statsContainer}>
              <Text style={styles.sectionTitle}>属性</Text>
              {item.Stats.map((stat, index) => (
                <InfoRow key={index} label={stat.DisplayName} value={stat.BaseValue.toString()} />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// 一个小组件，方便显示一行信息
const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  contentContainer: { padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  description: { fontSize: 16, color: '#ccc', marginBottom: 20, fontStyle: 'italic' },
  infoBox: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  infoLabel: { fontSize: 16, color: '#aaa' },
  infoValue: { fontSize: 16, color: '#fff', fontWeight: '600' },
  statsContainer: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    padding: 15,
  },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
  errorText: { color: 'red', fontSize: 24, textAlign: 'center', marginTop: 50 },
});
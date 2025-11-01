import { useTheme } from '@react-navigation/native';
import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// 操，直接从我们的兵工厂里拿货！
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/Card';
import { StatRow } from '@/components/ui/StatRow';

import allItems from '../../data/items.json';

export default function ItemDetailScreen() {
  const { id } = useLocalSearchParams();
  const { colors } = useTheme();

  const item = allItems.find((i) => i.ID.toString() === id);

  if (!item) {
    return <ThemedText>妈的，找不到这个物品！</ThemedText>;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Stack.Screen options={{ title: item.DisplayName }} />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* ----- 顶部信息 ----- */}
        <ThemedText type="title" style={{ marginBottom: 8 }}>{item.DisplayName}</ThemedText>
        <ThemedText type="subtitle" style={{ marginBottom: 24, fontStyle: 'italic', opacity: 0.8 }}>
          {item.Description}
        </ThemedText>

        {/* ----- 基本信息卡片 ----- */}
        <Card>
          <StatRow label="类别" value={item.Category} />
          <StatRow label="价格" value={item.Price} />
          <StatRow label="重量" value={item.UnitWeight} />
          <StatRow label="品质" value={item.Quality} />
        </Card>

        {/* ----- 属性卡片 (如果有) ----- */}
        {item.Stats && item.Stats.length > 0 && (
          <Card>
            <ThemedText type="defaultSemiBold" style={{ marginBottom: 8 }}>属性</ThemedText>
            {item.Stats.map((stat, index) => (
              // 妈的，看有多干净！直接循环调用我们的组件
              <StatRow key={index} label={stat.DisplayName} value={stat.BaseValue} />
            ))}
          </Card>
        )}
        
        {/* 你还可以继续加 Modifiers, Slots 等等其他卡片... */}

      </ScrollView>
    </SafeAreaView>
  );
}
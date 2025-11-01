import { ThemedText } from '@/components/themed-text';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  label: string;
  value: string | number;
};

export function StatRow({ label, value }: Props) {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.border,
    },
    infoLabel: {
      opacity: 0.7, // 让标签颜色稍微暗一点
    },
    infoValue: {
      fontWeight: '600',
    },
  });

  return (
    <View style={styles.infoRow}>
      <ThemedText style={styles.infoLabel}>{label}</ThemedText>
      <ThemedText style={styles.infoValue}>{value}</ThemedText>
    </View>
  );
}
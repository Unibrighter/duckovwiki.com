import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

type Props = ViewProps & {
  children: React.ReactNode;
};

export function Card({ children, style, ...props }: Props) {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    card: {
      backgroundColor: colors.card,
      borderRadius: 12,
      padding: 16,
      borderWidth: 1,
      borderColor: colors.border,
      marginBottom: 16,
    },
  });

  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
}
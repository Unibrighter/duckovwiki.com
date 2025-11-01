import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';


export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const colorScheme = 'dark'; // 强制统一配色

  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
  
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          // 从主题里动态读取颜色，操，再也没有硬编码了！
          headerStyle: {
            backgroundColor: theme.colors.card, // 导航栏背景色
          },
          headerTintColor: theme.colors.text, // 导航栏文字和按钮颜色
        }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

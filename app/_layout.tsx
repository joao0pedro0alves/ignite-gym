import { Platform, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { useCustomFonts } from '../src/hooks/useCustomFonts'
import { setNavigationBarColor } from '../src/lib/navigation-bar'

setNavigationBarColor('#121214')

export default function RootLayout() {
  const [hasLoadedFonts] = useCustomFonts()

  if (!hasLoadedFonts) {
    return <SplashScreen />
  }

  return (
    <View className="flex-1 bg-gray-700">
      <StatusBar style="light" translucent />

      <Stack
        initialRouteName="public"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
          animation: Platform.OS === 'ios' ? 'fade' : 'default',
        }}
      >
        <Stack.Screen name="public" />
        <Stack.Screen name="private" />
      </Stack>
    </View>
  )
}

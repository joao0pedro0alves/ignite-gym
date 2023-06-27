import { ImageBackground, Platform } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import authBackground from '../src/assets/auth-background.png'

import { useCustomFonts } from '../src/hooks/useCustomFonts'
import { setNavigationBarColor } from '../src/lib/navigation-bar'

setNavigationBarColor('#121214')

export default function RootLayout() {
  const [hasLoadedFonts] = useCustomFonts()

  if (!hasLoadedFonts) {
    return <SplashScreen />
  }

  return (
    <ImageBackground
      source={authBackground}
      className="relative flex-1 bg-gray-700"
      imageStyle={{ position: 'absolute', bottom: '25%' }}
    >
      <StatusBar style="light" translucent />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
          animation: Platform.OS === 'ios' ? 'fade' : 'default',
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="signup" />
      </Stack>
    </ImageBackground>
  )
}

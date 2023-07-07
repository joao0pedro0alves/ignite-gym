import { ImageBackground, Platform } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import authBackground from '../../src/assets/auth-background.png'

export default function PublicLayout() {
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

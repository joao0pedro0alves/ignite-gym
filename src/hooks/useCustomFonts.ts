import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

export function useCustomFonts() {
  return useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })
}

import { View, Text } from 'react-native'
import { Barbell } from 'phosphor-react-native'

export function Logo() {
  return (
    <View className="items-center justify-center">
      <View className="flex-row items-center gap-3">
        <Barbell size={40} color="#00B37E" />
        <Text className="font-title text-3xl text-white">Ignite Gym</Text>
      </View>
      <Text className="font-body text-sm text-gray-100">
        Treine sua mente e o seu corpo
      </Text>
    </View>
  )
}

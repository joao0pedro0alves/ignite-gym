import { Text, View, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'

import { Button } from './components/Button'
import { Logo } from './components/Logo'
import { TextInput } from './components/TextInput'

export default function Signup() {
  const router = useRouter()

  function handleGoToSignin() {
    router.push('/')
  }

  return (
    <ScrollView className="flex-1 px-8 py-10">
      {/* Header */}
      <View className="my-16">
        <Logo />
      </View>

      {/* Signin Form */}
      <View className="flex-1">
        <Text className="mb-4 text-center font-title text-xl text-gray-100">
          Crie sua conta
        </Text>

        <View className="mb-8 gap-4">
          <TextInput placeholder="Nome" />
          <TextInput placeholder="E-mail" keyboardType="email-address" />
          <TextInput placeholder="Senha" secureTextEntry />
          <TextInput placeholder="Confirme a Senha" secureTextEntry />
        </View>
        <Button label="Acessar" />
      </View>

      <View className="mt-[78px]">
        <Button
          variant="outlined"
          label="Voltar para o login"
          onPress={handleGoToSignin}
        />
      </View>
    </ScrollView>
  )
}

import { Text, View } from 'react-native'
import { useRouter } from 'expo-router'

import { Button } from '../components/Button'
import { Logo } from '../components/Logo'
import { TextInput } from '../components/TextInput'

export default function Login() {
  const router = useRouter()

  function handleSignin() {
    router.push('/home')
  }

  function handleSignup() {
    router.push('/signup')
  }

  return (
    <View className="flex-1 px-8 py-10">
      {/* Header */}
      <View className="mt-16 flex-1">
        <Logo />
      </View>

      {/* Signin Form */}
      <View>
        <Text className="mb-4 text-center font-title text-xl text-gray-100">
          Acesse sua conta
        </Text>

        <View className="mb-8 gap-4">
          <TextInput placeholder="E-mail" keyboardType="email-address" />
          <TextInput placeholder="Senha" secureTextEntry />
        </View>

        <View className="mb-28">
          <Button onPress={handleSignin} label="Acessar" />
        </View>

        <View className="gap-3">
          <Text className="text-center text-gray-100">
            Ainda não tem acesso?
          </Text>

          <Button
            variant="outlined"
            label="Criar conta"
            onPress={handleSignup}
          />
        </View>
      </View>
    </View>
  )
}

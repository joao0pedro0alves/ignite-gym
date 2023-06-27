import { TextInput as TextInputBase, TextInputProps } from 'react-native'

export function TextInput({ ...props }: TextInputProps) {
  return (
    <TextInputBase
      className="h-14 rounded-md bg-gray-700 px-4 text-gray-100"
      placeholderTextColor="#7C7C8A"
      {...props}
    />
  )
}

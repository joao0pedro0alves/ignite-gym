import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import clsx from 'clsx'

interface ButtonProps extends TouchableOpacityProps {
  label: string
  variant?: 'contained' | 'outlined'
}

export function Button({
  label,
  variant = 'contained',
  ...props
}: ButtonProps) {
  const isContained = variant === 'contained'

  return (
    <TouchableOpacity
      className={clsx('h-14 items-center justify-center rounded-md border', {
        'bg-green-700': isContained,
        'border-green-500 bg-transparent': !isContained,
      })}
      activeOpacity={0.8}
      {...props}
    >
      <Text
        className={clsx('font-title text-base', {
          'text-white': isContained,
          'text-green-500': !isContained,
        })}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}

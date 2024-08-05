import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { theme } from '@/constants/theme'
import Icon from '@/assets/icons'

const SignIn = () => {
  return (
    <ScreenWrapper>
      <Text>SignIn</Text>
      <Icon name='home' />
    </ScreenWrapper>
  )
}

export default SignIn

const styles = StyleSheet.create({})
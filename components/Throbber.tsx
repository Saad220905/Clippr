import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '@/constants/theme'

const Throbber = ({size='large', color=theme.colors.primary}: ThrobberProps) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}

export default Throbber

//temporary styles
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the View occupies available space
    justifyContent: 'center',
    alignItems: 'center',
  },
});
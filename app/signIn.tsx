import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import BackButton from '@/components/BackButton'
import { useRouter } from 'expo-router'

const SignIn = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <StatusBar style='dark' />
      <View style={styles.container}>
        <BackButton router={router}/>
      </View>
    </ScreenWrapper>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    
  }
})
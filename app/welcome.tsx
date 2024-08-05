import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { height_percentage, width_percentage } from '@/helpers/common'
import CustomButton from '@/components/CustomButton'
import { theme } from '@/constants/theme'
import { useRouter } from 'expo-router'

const Welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg='white'>
      <StatusBar style='dark' />
      <View style={styles.container}>
        <Image style={styles.WelcomeImage} resizeMode='contain' source={require('../assets/images/welcome.png')} />
        <View style={{gap: 20}}>
          <Text style={styles.title}>Clippr!</Text>
          <Text style={styles.punchline}>
            Where every story finds a home!
          </Text>
        </View>
        <View style={styles.footer}>
          <CustomButton 
            title='Get Started'
            buttonStyle={{ marginHorizontal: width_percentage(3) }}
            onPress={() => router.push('/signUp') }
            textStyle={undefined}
            loading={false}
            hasShadow={false}
          />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.loginText}>
              Already have an acoount?
            </Text>
            <Pressable onPress={() => router.push('/signIn')}>
              <Text style={[styles.loginText, {color: theme.colors.primaryDark, fontWeight: theme.fonts.semiBold}]}>
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingHorizontal: width_percentage(4)
  },
  WelcomeImage: {
    height: height_percentage(30),
    width: width_percentage(100),
    alignSelf: 'center',

  },
  title: {
    color: theme.colors.text,
    fontSize: height_percentage(4),
    textAlign: 'center',
    fontWeight: theme.fonts.extraBold
  },
  punchline: {
    textAlign: 'center',
    paddingHorizontal: width_percentage(10),
    fontSize: height_percentage(1.7),
    color: theme.colors.text
  },
  footer: {
    gap: 30,
    width: '70%'
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  loginText: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: height_percentage(1.6)
  }

})
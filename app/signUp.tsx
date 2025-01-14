import { Alert, Pressable, StyleSheet, Text, TextComponent, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import BackButton from '@/components/BackButton'
import { useRouter } from 'expo-router'
import { height_percentage, width_percentage } from '@/helpers/common'
import { theme } from '@/constants/theme'
import Icon from '@/assets/icons'
import CustomTextInput from '@/components/CustomTextInput'
import CustomButton from '@/components/CustomButton'

const signUp = () => {
  const router = useRouter();
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const onSubmit = async () => {
    const onSubmit = async () => {
      if (!nameRef.current || !emailRef.current || !passwordRef.current) {
        Alert.alert('SignUp', 'Please fill all the fields');
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailRef.current)) {
        Alert.alert('SignUp', 'Please enter a valid email address');
        return;
      }
      if (passwordRef.current.length < 6) {
        Alert.alert('SignUp', 'Password should be at least 6 characters');
        return;
      }

      setLoading(true);
      try {
        // Call the API here
      } catch (error) {
        Alert.alert('SignUp', 'Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  return (
    <ScreenWrapper bg='white'>
      <StatusBar style='dark' />
      <View style={styles.container}>
        <BackButton router={router}/>
        {/* welcome */}
        <View>
          <Text style={styles.welcomeText}>Let's</Text>
          <Text style={styles.welcomeText}>Get Started</Text>
        </View>
        {/* form */}
        <View style={styles.form}>
          <Text style={{fontSize: height_percentage(1.5), color: theme.colors.text}}>
            Please enter your details to create an account
          </Text>
          <CustomTextInput
            icon={<Icon name='user' size={26} strokeWidth={1.6} />}
            placeholder='Enter your name'
            onChangeText={(value: any)=>nameRef.current = value}
          />
          <CustomTextInput
            icon={<Icon name='mail' size={26} strokeWidth={1.6} />}
            placeholder='Enter your email'
            onChangeText={(value: any)=>emailRef.current = value}
          />
          <CustomTextInput
            icon={<Icon name='lock' size={26} strokeWidth={1.6} />}
            placeholder='Enter your password'
            secureTextEntry
            onChangeText={(value: any)=>passwordRef.current = value}
          />
          {/* form */}
          <CustomButton title={'Sign up'} loading={loading} onPress={onSubmit} />
        </View>
        {/* footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Pressable onPress={() => router.push('signIn' as any)}>
            <Text style={[styles.footerText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold }]}>
              Sign in
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default signUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: width_percentage(5)
  },
  welcomeText: {
    fontSize: height_percentage(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text
  },
  form: {
    gap: 25
  },
  forgotPassword: {
    textAlign: 'right',
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  footerText: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: height_percentage(1.6)
  }
})
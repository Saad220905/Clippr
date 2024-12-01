import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '@/constants/theme'
import { height_percentage } from '@/helpers/common'

const CustomTextInput = ({ icon, placeholder, onChangeText }: CustomTextInputProps) => {
  return (
    <View style={[styles.container, props.containerStyles && props.containerStyles]}>
        {
            props.icon && props.icon
        }
        <CustomTextInput
            style={{flex: 1}}
            placeholderTextColor={theme.colors.textLight}
            ref={props.inputRef && props.inputRef}
            {...props}
        />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: height_percentage(7.2),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.4,
        borderColor: theme.colors.text,
        borderRadius: theme.colors.xxl,
        borderCurve: 'continuous',
        paddingHorizontal: 18,
        gap: 12
    }
})
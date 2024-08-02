import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '@/constants/theme'
import { height_percentage, width_percentage } from '@/helpers/common'
import Throbber from './Throbber'

const CustomButton = ({
    buttonStyle,
    textStyle,
    title = '',
    onPress = () => {},
    loading = false,
    hasShadow = true
}: CustomButtonProps ) => {
    const shadowStyle = {
        shadowColor: theme.colors.dark,
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.2,
        shodowRadius: 8,
        elevation: 4
    }
    if(loading) {
        <View style={[styles.button, buttonStyle, {backgroundColor: 'white'}]}>
            <Throbber />
        </View>
    }
    return (
        <Pressable onPress={onPress} style={[styles.button, buttonStyle, hasShadow && shadowStyle]}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        height: height_percentage(6.6),
        /*width: width_percentage(50),*/
        justifyContent: 'center',
        alignItems: 'center',
        borderCurve: 'continuous',
        borderRadius: theme.radius.xl
    },
    text: {
        fontSize: height_percentage(2.5),
        color: 'white',
        fontWeight: theme.fonts.bold
    }
})
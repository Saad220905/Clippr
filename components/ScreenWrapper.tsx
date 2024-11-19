import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScreenWrapper = ({ children, bg }: ScreenWrapperProps) => {
    const top = useSafeAreaInsets();
    const paddingTop: number = (typeof top === 'number' && top > 0) ? top + 5 : 40;
    return (
        <View style={{ flex: 1, paddingTop, backgroundColor: bg }}>
            {children}
        </View>
  )
}

export default ScreenWrapper
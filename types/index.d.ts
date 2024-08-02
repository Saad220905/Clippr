declare interface ScreenWrapperProps {
    children?: any;
    bg?: string;
}

declare interface CustomButtonProps {
    buttonStyle: buttonStyle, 
    textStyle: TextStyle, 
    title: string, 
    onPress: () => void, 
    loading: boolean, 
    hasShadow: boolean
}

declare interface ThrobberProps {
    size?: string,
    color?: string
}
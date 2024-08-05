interface Colors {
    primary: string;
    primaryDark: string;
    dark: string;
    darkLight: string;
    gray: string;

    text: string;
    textLight: string;
    textDark: string;

    rose: string;
    roseLight: string;
}

interface Fonts {
    medium: string;
    semiBold: string;
    bold: string;
    extraBold: string;
}

interface Radius {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
}

declare interface Theme {
    colors: Colors;
    fonts: Fonts;
    radius: Radius;
}

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
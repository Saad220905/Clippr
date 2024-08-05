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

declare interface IconProps {
    fill: ColorValue | undefined;
    strokeWidth: NumberProp | undefined;
    props:  React.JSX.IntrinsicAttributes & React.JSX.IntrinsicClassAttributes<Svg> & Pick<Readonly<SvgProps>, "width" | "height" | "viewBox" | "color" | "title" | "children" | "opacity" | "fill" | "fillOpacity" | "fillRule" | "stroke" | "strokeWidth" | "strokeOpacity" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "vectorEffect" | "clipRule" | "clipPath" | "translate" | "translateX" | "translateY" | "origin" | "originX" | "originY" | "scale" | "scaleX" | "scaleY" | "skew" | "skewX" | "skewY" | "rotation" | "x" | "y" | "transform" | "pointerEvents" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "disabled" | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "delayPressIn" | "delayPressOut" | "delayLongPress" | "id" | "marker" | "markerStart" | "markerMid" | "markerEnd" | "mask" | "filter" | "onLayout" | "accessibilityLabel" | "accessible" | "testID" | "font" | "fontStyle" | "fontVariant" | "fontWeight" | "fontStretch" | "fontSize" | "fontFamily" | "textAnchor" | "textDecoration" | "letterSpacing" | "wordSpacing" | "kerning" | "fontFeatureSettings" | "fontVariantLigatures" | "fontVariationSettings" | "hitSlop" | "needsOffscreenAlphaCompositing" | "removeClippedSubviews" | "style" | "nativeID" | "collapsable" | "renderToHardwareTextureAndroid" | "focusable" | "tabIndex" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessibilityActions" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-modal" | "role" | "accessibilityLabelledBy" | "aria-labelledby" | "accessibilityLiveRegion" | "aria-live" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage"> & { readonly preserveAspectRatio?: string | undefined; } & {}
}
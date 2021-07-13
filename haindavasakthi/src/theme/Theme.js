import { Dimensions } from "react-native"

const {width, height} = Dimensions.get('window')
export const SPACES = 20
export const WINDOW_WIDTH = width
export const WINDOW_HEIGHT = height

// Sizes
export const SIZES = {
    sm: 8, md: 16, lg: 32, xl: 64,
}

// Colors
export const COLORS = {
    primary: '#FF4C22', secondary: '#2561B5', ternery: '#412236', red: '#db4343', dark: '#484848', light: '#898989', white: '#fff', black: '#000'
}
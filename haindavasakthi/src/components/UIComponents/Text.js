import React from 'react'
import {Text} from 'react-native'
// NunitoSans-Bold, NunitoSans-Regular, NunitoSans-Light, NunitoSans
// export default props => <Text {...props} style={[{fontFamily: 'SourceSansPro-Regular'}, props.style]}>{props.children}</Text>

const RegularText = props => (
    <Text {...props} style={[{fontFamily: 'NunitoSans-Regular'}, props.style]}>{props.children}</Text>
)

const BoldText = props => (
    <Text {...props} style={[{fontFamily: 'NunitoSans-Bold'}, props.style]}>{props.children}</Text>
)

const LightText = props => (
    <Text {...props} style={[{fontFamily: 'NunitoSans-ExtraLight'}, props.style]}>{props.children}</Text>
)

export { RegularText, BoldText, LightText }
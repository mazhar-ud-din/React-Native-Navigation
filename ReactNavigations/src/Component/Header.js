import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = ({onPress ,HeaderValue }) => {
    return (
        <View style={{flexDirection:'row', justifyContent:'space-between',height:42}}>
            <TouchableOpacity onPress={onPress}>
                <Text>goBack</Text>
            </TouchableOpacity>
            <Text>{HeaderValue}</Text>
        </View>
    )
}

export default Header
import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../Component/Header'

const ThirdScreen = ({navigation}) => {
  return (
    <View>
    <Header onPress={()=>navigation.goBack()}/>

      <Text>ThirdScreen</Text>
    </View>
  )
}

export default ThirdScreen
import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../Component/Header'

const FirstScreen = ({navigation}) => {
  return (
    <View>
    <Header onPress={()=>navigation.goBack()}/>
      <Text>FirstScreen</Text>
    </View>
  )
}

export default FirstScreen
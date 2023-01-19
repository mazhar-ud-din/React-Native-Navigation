import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../Component/Header'

const SecondScreen = ({navigation}) => {

  return (
    <View>
    <Header onPress={()=>navigation.goBack()}/>
      <Text>SecondScreen</Text>
    </View>
  )
}

export default SecondScreen
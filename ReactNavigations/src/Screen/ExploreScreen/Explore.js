import { View, Text } from 'react-native'
import React from 'react'
import styles from './Styles'
import Button from '../../Component/Button'
import NavigationString from '../../Navigation/Constants/NavigationString'
import Header from '../../Component/Header'

const Explore = ({navigation}) => {
  const goToScreen=()=>{
    navigation.navigate(NavigationString.THIRDSCREEN)
  }
  return (
    <View style={styles.Container}>
      <Text>Explore</Text>
      <Button BtnValue={'Go to Third Value'} onPress={goToScreen}/>
    </View>
  )
}

export default Explore
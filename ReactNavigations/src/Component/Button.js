import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Button({BtnValue,onPress}) {
  return (
    <TouchableOpacity style={styles.txt} onPress={onPress}>
    <Text >{BtnValue}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    txt:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'pink',
        borderRadius:10,
        borderWidth:1,
        width:180,
        height:50
      },
})
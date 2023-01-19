import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import styles from './Styles'
import Header from '../../Component/Header'
import Button from '../../Component/Button'
import NavigationString from '../../Navigation/Constants/NavigationString'
styles
const Home = ({navigation}) => {

  const goToScreen=()=>{
    navigation.navigate(NavigationString.FIRSTSCREEN)
  }
  return (
    <>
    <Header Value={Home}  HeaderValue={'Home'} />

      <View style={styles.Container}>
      
      <Text> This Is HomeScreen</Text>

      <Button BtnValue={'Move First Screen'} onPress={goToScreen} />
    </View>
    </>
    
  )
}

export default Home


// import { View, Text, TouchableOpacity } from 'react-native'
// import React from 'react'
// import styles from './Styles'
// import NavigationString from '../../Navigation/Constants/NavigationString'

// const Home = ({navigation}) => {
  

//   const goToScreen=()=>{
//     navigation.navigate(NavigationString.PROFILE)
//   }

//   return (
//     <View style={styles.Container}>
//     <Header/>
//       <Text>This Is Home Page</Text>
// <TouchableOpacity onPress={goToScreen}>
//   <Text>Move Second  Screen</Text>
// </TouchableOpacity>
//     </View>
//   )
// }

// export default Home
import { View, Text } from 'react-native'
import React from 'react'
import Button from '../../Component/Button'
import styles from './Styles'
import NavigationString from '../../Navigation/Constants/NavigationString'

const Profile = ({navigation}) => {
  const goToScreen=()=>{
    navigation.navigate(NavigationString.SECONDSCREEN)
  }
  return (
    <View style={styles.Container}>
      <Text>Profile</Text>
      <Button BtnValue={'GotoSecondScreen'} onPress={goToScreen}/>
    </View>
  )
}

export default Profile

// import { View, Text ,TouchableOpacity,SafeAreaView} from 'react-native'
// import React from 'react'
// import styles from './Styles'
// import NavigationString from '../../Navigation/Constants/NavigationString'
// import Header from '../../Component/Header'


// const Profile = ({navigation}) => {
  
//   const goToScreen=()=>{
//     navigation.navigate(NavigationString.EXPLORE)
//   }

// return (
//     <View style={styles.Container}>
//     <View></View>
//     <Header onPress={()=>navigation.goBack()} Value={'Icon'} />
    
// <TouchableOpacity onPress={goToScreen}>
//   <Text>Move Third  Screen</Text>
// </TouchableOpacity>
//     </View>
//   )
// }

// export default Profile
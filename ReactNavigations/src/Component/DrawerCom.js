import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import { Image, TouchableOpacity, View, Text } from 'react-native'
import ConstantImages from '../Constant/image';
import NavigationString from '../Navigation/Constants/NavigationString';

function DrawerCom(props) {

    const { navigation } = props

    const gotoScreen = (screen) => {
        navigation.navigate(screen)
    }

    return (


        <DrawerContentScrollView
            {...props}
        >
            <View style={{ backgroundColor: '#00ccff', alignItems: 'center',flexDirection:'row',justifyContent:'space-between' }}>
                <Image source={ConstantImages.ProfileIcon} style={{ width: 80, height: 80, borderRadius: 40, }} />

                <Text >User_Name</Text>
                <View style={{}}>
<TouchableOpacity onPress={()=>navigation.closeDrawer()}>
    <Text>Close</Text>
</TouchableOpacity>
                </View>

            </View>

            <DrawerItem
                onPress={() => gotoScreen(NavigationString.HOME)}
                label={'Home'}
                icon={() => <Image source={ConstantImages.HomeIcon} style={{ width: 25, height: 25 }} />}
                labelStyle={
                    {
                        fontWeight: '400',
                        color: 'red',

                    }
                }
            />
            <DrawerItem label={'Profile'} onPress={() => gotoScreen(NavigationString.PROFILE)}
                icon={() => <Image source={ConstantImages.ChartIcon} style={{ width: 25, height: 25 }} />}
                labelStyle={
                    {
                        fontWeight: '400',
                        color: 'red',

                    }
                }
            />
            <DrawerItem label={'Explore'} onPress={() => gotoScreen(NavigationString.EXPLORE)}
                icon={() => <Image source={ConstantImages.GroupIcon} style={{ width: 25, height: 25 }} />}
                labelStyle={
                    {
                        fontWeight: '400',
                        color: 'red',

                    }
                }
            />

        </DrawerContentScrollView>
    )

}

export default DrawerCom;
import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
export default function Home({navigation}) {
    return (       
      <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Signup" component={Signup} />
      </Drawer.Navigator>
    )
}

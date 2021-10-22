import React from 'react';
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import Cards from './Components/Cards/Cards';
import Payment from './Components/Payment/Payment';
import Bill from './Components/Bill/Bill'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen options={{headerShown:false}} name="Home"  component={Home} />
        <Stack.Screen options={{headerShown:false}} name="Cards"  component={Cards} /> */}
         <Stack.Screen options={{headerShown:false}} name="Booking"  component={Booking} />
        <Stack.Screen options={{headerShown:false}} name="Payment"  component={Payment} />
        <Stack.Screen options={{headerShown:false}} name="Bill"  component={Bill} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
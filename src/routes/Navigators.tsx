import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Login, Profile, Home, SignUp } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeStack = () =>{

  // TODO change the navigator for bottomTabsNavigator 

  const Tab = createBottomTabNavigator()

  return(
    <Tab.Navigator initialRouteName='Feed'>
      <Tab.Screen
        name='Feed'
        component={Home}
        options={{
          headerShown:false
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
      />
    </Tab.Navigator>
  )
}
  
const MainNavigator = () =>{

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen 
                name='Login' 
                component={Login}
                options={{
                headerShown:false
                }}
            />
            <Stack.Screen 
                name='Home'
                component={HomeStack}
                options={{
                headerShown:false
                }}
            />
            <Stack.Screen
                name='SignUp'
                component={SignUp}
                options={{
                headerShown:false
                }}
            />
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export { MainNavigator }
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Login } from '../pages/Login/Login';
import { Home } from '../pages/Home/Home';
import { Profile } from '../pages/Profile/Profile';
import { SignUp } from '../pages/Signup/Signup';

const HomeStack = () =>{

    const Drawer = createDrawerNavigator()
  
    return(
      <Drawer.Navigator 
        screenOptions={{
          drawerPosition:'left'
        }} 
        initialRouteName='Feed'
      >
        <Drawer.Screen
          name='Feed'
          component={Home}
          options={{
            headerShown:false
          }}
        />
        <Drawer.Screen
          name='Profile'
          component={Profile}
        />
      </Drawer.Navigator>
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
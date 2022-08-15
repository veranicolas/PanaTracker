import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Login } from './src/pages/Login/Login';
import { Home } from './src/pages/Home/Home';
import { SignUp } from './src/pages/Signup/Signup';
import { Profile } from './src/pages/Profile/Profile';

const HomeStack = () =>{

  const Drawer = createDrawerNavigator()

  return(
    <Drawer.Navigator initialRouteName='Feed'>
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

export default function App() {

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

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Login } from './src/pages/Login/Login';
import { Home } from './src/pages/Home/Home';
import { SignUp } from './src/pages/Signup/Signup';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen 
            name='Login' 
            component={Login}
            options={{
              title:'Welcome!',
              headerTitleAlign:'center',
              headerTitleStyle:{fontWeight:'500'}
            }}
          />
          <Stack.Screen 
            name='Home'
            component={Home}
          />
          <Stack.Screen
            name='SignUp'
            component={SignUp}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Register from './src/pages/register';
import Login from './src/pages/login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer  >
      <Stack.Navigator >
      <Stack.Screen   name="Login" options={{headerShown: false}} component={Login} />
      <Stack.Screen name="Registro"  options={{headerShown: false}} component={Register} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 ,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default App;

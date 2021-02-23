import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screen/Home';
import Category from './screen/Category';
import SettingTab from './screen/SettingTab';
import CartTab from './screen/CartTab';
import AccountTab from './screen/AccountTab';

function Root(){
  const AppContainer = createStackNavigator();

  return (
    <AppContainer.Navigator initialRouteName='Home'>
        <AppContainer.Screen 
          name='Home'
          component={Home}/>
        <AppContainer.Screen 
          name='Category'
          component={Category}
          options={({ route }) => ({title: route.params.title})}/>
      </AppContainer.Navigator>
  );
}


export default function App() {

  
  const BottomContainer = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <BottomContainer.Navigator>
        <BottomContainer.Screen name='Main' component={Root}/>
        <BottomContainer.Screen name='CartTab' component={CartTab}/>
        <BottomContainer.Screen name='AccountTab' component={AccountTab}/>
        <BottomContainer.Screen name='SettingTab' component={SettingTab}/>
      </BottomContainer.Navigator>
    </NavigationContainer>
  );

}


import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screen/Home';
import Category from './screen/Category';
import SettingTab from './screen/SettingTab';
import CartTab from './screen/CartTab';
import AccountTab from './screen/AccountTab';
import { Ionicons } from '@expo/vector-icons'
import { Settings } from 'react-native';

const activeColor = {
  ACTIVE: '#663399',
  INACTIVE: '#ccc'
}

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

function Cart(){
  const CartContainer = createStackNavigator();

  return(
    <CartContainer.Navigator>
      <CartContainer.Screen 
        name='Cart'
        component={CartTab}
      />
    </CartContainer.Navigator>
  )
}

function Account(){
  const AccountContainer = createStackNavigator();

  return(
    <AccountContainer.Navigator>
      <AccountContainer.Screen 
        name="Account"
        component={AccountTab}
      />
    </AccountContainer.Navigator>
  )
}

function Setting(){
  const SettingContainer = createStackNavigator();

  return(
    <SettingContainer.Navigator>
      <SettingContainer.Screen 
        name='Setting'
        component={SettingTab}
      />
    </SettingContainer.Navigator>
  )
}

function activeTab(iconName, props){
  return (
    <Ionicons  
        name={iconName} 
        size={props.size} 
        color={props.focused ? activeColor.ACTIVE : activeColor.INACTIVE} 
    />
  )
}


export default function App() {

  
  const BottomContainer = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <BottomContainer.Navigator 
        initialRouteName = 'Main'
        tabBarOptions = {{
          activeTintColor: activeColor.ACTIVE,
          inactiveTintColor: activeColor.INACTIVE
        }}
      >
        <BottomContainer.Screen 
          name='Main' 
          component={Root} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: (props) => 
              activeTab('md-planet', props)
          }}
        />
        <BottomContainer.Screen 
          name='CartTab' 
          component={Cart}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: (props) => 
              activeTab('cart', props)
          }}
        />
        <BottomContainer.Screen 
          name='AccountTab' 
          component={Account}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: (props) => 
              activeTab('information-circle-outline', props)
          }}
        />
        <BottomContainer.Screen 
          name='SettingTab' 
          component={Setting}
          options={{
            tabBarLabel: 'Setting',
            tabBarIcon: (props) => 
              activeTab('settings', props)
          }}  
        />
      </BottomContainer.Navigator>
    </NavigationContainer>
  );

}


import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BasicMethodScreen from '../screens/BasicMethodScreen';
import IterationMethodScreen from '../screens/iterationMethods';
import SearchMethodScreen from '../screens/SearchMethodScreen';
import SortMethodScreen from '../screens/sortMethods';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function NavigationBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderTopColor: '#EBF0FF',
          backgroundColor: '#FFF',
          borderTopWidth: 1,
          height: 100,
        },
        tabBarActiveTintColor: '#40BFFF',
        tabBarInactiveTintColor: '#9098B1',
        tabBarLabelStyle: {
          fontSize: 10,
        },
      }}>
      <Tab.Screen
        name="Basic"
        component={BasicMethodScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Iteration"
        component={IterationMethodScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Octicons name="iterations" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchMethodScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Sort"
        component={SortMethodScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="sort" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default NavigationBar;

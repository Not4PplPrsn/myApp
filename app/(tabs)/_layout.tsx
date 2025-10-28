import {Drawer} from 'expo-router/drawer';
import React from 'react';
import { Stack } from 'expo-router';
import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import {Tabs} from 'expo-router';
import { BottomTabBarHeightCallbackContext } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

export default function TabLayout() {

  const colorScheme = useColorScheme();

  const EXCLUDED_DIRECTORY_SCREENS = [
  '../6-month/FirstAid',
  '../6-month/Sewing',
  '../6-month/LandScaping',
  '../6-month/LifeSkills',
  '../6-weeks/Gardening',
  '../6-weeks/Cooking',
  '../6-weeks/Child-Minding',
];


  return (
 <Tabs screenOptions={{ headerShown: true,
   tabBarStyle:{
      backgroundColor: "#2D8627",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      animationDelay: 120,
      animationPlayState: 'waiting',
    }, 
    tabBarInactiveTintColor: '#ffff'
  }}>
      {/* Only these will show in tabs */}
      <Tabs.Screen name="index" options={{ title: 'Welcome',  tabBarIcon: ({ color, size }) => (
      <Ionicons name="home-outline" size={size} color={color} 
      />
    ),
           headerStyle: {
      backgroundColor:'#0000',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 0,
      borderWidth: 0,
      borderColor: '#0000',
      alignItems: 'center',
      alignContent: 'center'

    },
        tabBarActiveTintColor: '#e0dd15ff'

   
  
 }} />
      <Tabs.Screen name="Calculate" options={{ title: 'Calculate', tabBarIcon: ({ color, size }) => (
      <Ionicons name="calculator" size={22} color={color} />
    ),
           headerStyle: {
      backgroundColor:'#0000',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 0,
      borderWidth: 0,
      borderColor: '#0000',

    },
        tabBarActiveTintColor: '#e06363ff'


    }} />

      <Tabs.Screen name="Contact" options={{ title: 'Contacts', tabBarIcon: ({ color, size }) => (
      <Ionicons name="at" size={size} color={color} />
    ),
           headerStyle: {
      backgroundColor:'#0000',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 0,
      borderWidth: 0,
      borderColor: '#0000',

    },
        tabBarActiveTintColor: '#81c8e4ff'


    }} />
      <Tabs.Screen name="Course" options={{ title: 'Courses', tabBarIcon: ({ color, size }) => (
      <Entypo name="book" size={size} color={color} />
    ),
           headerStyle: {
      backgroundColor:'#0000',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 0,
      borderWidth: 0,
      borderColor: '#0000',

    },
        tabBarActiveTintColor: '#3dd330ff'
    }} />
      
      {/* Exclude entire directory screens */}
      {EXCLUDED_DIRECTORY_SCREENS.map((screenPath) => (
        <Tabs.Screen
          key={screenPath}
          name={screenPath}
          options={{ href: null }}
        />
      ))}
    </Tabs>
  );
}

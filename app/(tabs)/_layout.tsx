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
    }, 
    tabBarActiveTintColor: Colors.light.tint, tabBarInactiveTintColor: Colors.light.text,
  }}>
      {/* Only these will show in tabs */}
      <Tabs.Screen name="index" options={{ title: 'Home',  tabBarIcon: ({ color, size }) => (
      <Ionicons name="home-outline" size={size} color={color} 
      />
    ),
           headerStyle: {
      backgroundColor:'#ec6f35ff',
      padding: 5,
      height: 50,
      width: 40,
      alignContent:'center',
      justifyContent:'center',

    },

   
  
 }} />
      <Tabs.Screen name="Calculate" options={{ title: 'Calculate', tabBarIcon: ({ color, size }) => (
      <Ionicons name="calculator" size={22} color={color} />
    ),
           headerStyle: {
      backgroundColor:'#0d4b09ff',

    },

    }} />

      <Tabs.Screen name="Contact" options={{ title: 'Contacts', tabBarIcon: ({ color, size }) => (
      <Ionicons name="at" size={size} color={color} />
    ),
           headerStyle: {
      backgroundColor:'#5521e4ff',

    },

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

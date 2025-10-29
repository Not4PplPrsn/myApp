import { useColorScheme } from '@/hooks/use-color-scheme';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

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
 <Tabs screenOptions={{ headerShown: false,
   tabBarStyle:{
      backgroundColor: "#2d8627fa",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      animationDelay: 120,
      animationPlayState: 'waiting',
    }, 
    tabBarInactiveTintColor: '#ffff',
    headerStyle: {
    }
  }}>
      {/* Only these will show in tabs */}
      <Tabs.Screen name="index" options={{ title: 'Welcome',  tabBarIcon: ({ color, size }) => (
      <Ionicons name="home-outline" size={size} color={color} 
      />
    ),
    headerTransparent: true,
           headerStyle: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 0,
      borderWidth: 0,
      borderColor: '#0000',
    },
    headerTitleStyle: {
      color: '#045e0bff',
      fontSize: 30, marginBottom: 22
    },
        tabBarActiveTintColor: '#e0dd15ff',
        headerTitleAlign: 'center'

   
  
 }} />
       <Tabs.Screen name="Course" options={{ title: 'Courses', tabBarIcon: ({ color, size }) => (
      <Entypo name="book" size={size} color={color} />
    ),
        headerTransparent: true,

           headerStyle: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 0,
      borderWidth: 0,
      borderColor: '#0000',

    },
        tabBarActiveTintColor: '#3dd330ff',
      headerTitleAlign: 'center'

    }} />
      <Tabs.Screen name="Contact" options={{ title: 'Contacts', tabBarIcon: ({ color, size }) => (
      <Ionicons name="at" size={size} color={color} />
    ),
        headerTransparent: true,

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
        tabBarActiveTintColor: '#81c8e4ff',
        headerTitleAlign: 'center'
      


    }} />

      <Tabs.Screen name="Calculate" options={{ title: 'Calculate', tabBarIcon: ({ color, size }) => (
      <Ionicons name="calculator" size={22} color={color} />
    ),
        headerTransparent: true,

           headerStyle: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 0,
      borderWidth: 0,
      borderColor: '#0000',

    },
        tabBarActiveTintColor: '#e06363ff',
                headerTitleAlign: 'center'



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

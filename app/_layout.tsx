import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import 'react-native-reanimated';
import FirstAid from './6-month/FirstAid';
import LandScaping from './6-month/LandScaping';
import LifeSkills from './6-month/LifeSkills';
import Sewing from './6-month/Sewing';
import ChildMinding from './6-weeks/Child-Minding';
import Cooking from './6-weeks/Cooking';
import Gardening from './6-weeks/Gardening';

export type CourseItem = {
  name: string;
  page: string;
  path: Parameters<typeof router.push>[0];
  component: any;
};

export type SixMonthItem = {
  pack: number;
  name: string;
  path: Parameters<typeof router.push>[0];
  slug: string;
  component: any;
};

const SixMonth: SixMonthItem[] = [
  { pack: 1, name: 'FirstAid', component: FirstAid, path: '/6-month/FirstAid', slug: 'FirstAid' },
  { pack: 2, name: 'LandScaping', component: LandScaping,path: '/6-month/LandScaping', slug: 'LandScaping' },
  { pack: 3, name: 'LifeSkills', component: LifeSkills, path: '/6-month/LifeSkills', slug: 'LifeSkills' },
  { pack: 4, name: 'Sewing', component:Sewing, path: '/6-month/Sewing', slug: 'Sewing' },
];

const SixWeeks: CourseItem[] = [
  { page: "1", name: 'Cooking', component: Cooking, path: '/6-weeks/Cooking' },
  { page: "2", name: 'Gardening', component:Gardening, path: '/6-weeks/Gardening' },
  { page: "3", name: 'ChildMinding', component: ChildMinding, path: '/6-weeks/Child-Minding' },
];

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout(props: any) {
  const [expandedSections, setExpandedSections] = useState({
    SixMonth: false,
    SixWeeks: false,
    tabs:false,
  });

  const toggleSection = (key: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Drawer
    screenOptions={{drawerType: 'front', headerShown: true,
      drawerStyle: { width: 270,
        direction: 'ltr',
        backgroundColor: '#46a023ff',
        paddingTop: 20,
        justifyContent: 'space-between',
        borderTopEndRadius: 10,
        animationDirection: 'reverse',
        animationName:'slide-in-right',
        animationFillMode: 'forwards',
        animationDuration: '5050ms',
      },
      drawerPosition: 'right',
      drawerLabelStyle: { textAlign: 'right', paddingRight: 10, paddingLeft: 0 ,},
      headerTitleAlign: 'left', 
      headerTitle: () => (
      <View style={{width: 90, flexDirection: 'row', }}>
        <Image source={require('../assets/images/EmpowerS.svg')}
        style= {{width: 50}}
        />
        <Text style= {{fontSize: 15, fontWeight: 'bold', color: '#ffff', fontStyle: 'italic'}}>Empowering SA</Text>
      </View>),
      headerStyle: { backgroundColor: '#2d8627fa', borderRadius: 7.5, 
        
      },
      headerTintColor: '#ffff',
      drawerActiveTintColor: '#0a5f34ff',
      drawerInactiveTintColor: '#f8f2f2ff',
      
      
      
      
    }}>  
      <Drawer.Screen
        name="(tabs)"
        options={{ drawerLabel: 'Main', 
          title:'Main'
          
          
         }}
      />
      <Drawer.Screen
        name="6-month/FirstAid"
        options={{ drawerLabel: 'First Aid' , title: 'First Aid' }}
      />
      <Drawer.Screen
        name="6-month/Sewing"
        options={{ drawerLabel: 'Sewing', title: 'Sewing' }}
      />
      <Drawer.Screen
        name="6-month/LandScaping"
        options={{ drawerLabel: 'Land Scaping', title: 'Land Scaping' }} 
      />
      <Drawer.Screen
        name="6-month/LifeSkills"
        options={{ drawerLabel: 'Life Skills', title: 'Life Skills' }}
      />
      <Drawer.Screen
        name="6-weeks/Gardening"
        options={{ drawerLabel: 'Gardening', title: 'Gardening' }}
      />
      <Drawer.Screen
        name="6-weeks/Cooking"
        options={{ drawerLabel: 'Cooking', title: 'Cooking' }}
      />
      <Drawer.Screen
        name="6-weeks/Child-Minding"
        options={{ drawerLabel: 'Child Minding', title: 'Child Minding' }}
      />
    </Drawer>
    );
}
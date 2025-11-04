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
import { useRouter } from 'expo-router';
 import { DrawerItem, DrawerItemList,DrawerView } from '@react-navigation/drawer';
 import { DrawerContentScrollView } from '@react-navigation/drawer';
 import { Switch } from 'react-native-gesture-handler';

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

  return (
    <Drawer
    screenOptions={{drawerType: 'front', headerShown: true,
      drawerStyle: { width: 350,
        direction: 'ltr',
        backgroundColor: '#256e09ff',
        paddingTop: 5,
        paddingBottom: 15,
        justifyContent: 'space-between',
        borderTopRightRadius: 10,
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
      headerStyle: { backgroundColor: '#2d8627fa', borderBottomLeftRadius: 7.5,
        height: 89.7, borderBottomRightRadius: 7.5,
        padding: 15,
        borderTopEndRadius: 0
        
      },
      headerTintColor: '#ffff',
      drawerActiveTintColor: '#f7625dff',
      drawerInactiveTintColor: '#f8f2f2ff',
      headerTitleStyle: {
        padding:100,
      }
      
      
      
      
      
      
    }}
    drawerContent={() => <CustomDrawerContent/>}/>  

    );
}

export function CustomDrawerContent(){

  const router = useRouter();

  const [items, setItems] = useState([
    ...SixMonth.map(item => ({ ...item, visible: true })),
    ...SixWeeks.map(item => ({ ...item, visible: true })),
  ]);
  const toggleSection = (key: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  const [expandedSections, setExpandedSections] = useState({
    SixMonth: false,
    SixWeeks: false,
   
  });


  
  return(
<DrawerContentScrollView>
<DrawerItem
  label="Main"
  labelStyle={{ textAlign: 'right', color: "#ffff" }}

  onPress={() => router.push('/(tabs)')}
  

  />
  {/*Tabs button */}
  {/* Toggle for 6-Month Courses */}
  <View style={{flexDirection: 'row-reverse'}}>
    <Text style={{color: "#ffff"}}>6-Month Courses</Text>
    <Switch
      value={expandedSections.SixMonth}
      onValueChange={() => toggleSection('SixMonth')}
    />
  </View>

  {expandedSections.SixMonth &&
    SixMonth.map(item => (
      <DrawerItem
        key={item.name}
        label={item.name}
         labelStyle={{color: '#ffff'}}
        onPress={() => router.push(item.path)}
        
      />
    ))}

  {/* Toggle for 6-Week Courses */}
  <View style={{flexDirection: 'row-reverse'}}>
    <Text style={{color: "#ffff"}}>6-Week Courses</Text>
    <Switch
      value={expandedSections.SixWeeks}
      onValueChange={() => toggleSection('SixWeeks')}
    />
  </View>

  {expandedSections.SixWeeks &&
    SixWeeks.map(item => (
      <DrawerItem
        key={item.name}
        label={item.name}
         labelStyle={{color: '#ffff'}}

        onPress={() => router.push(item.path)}
      />
    ))}
</DrawerContentScrollView>
  );
}
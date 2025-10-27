import { DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import 'react-native-reanimated';
//Six month courses 
import FirstAid from './6-month/FirstAid';
import LandScaping from './6-month/LandScaping';
import LifeSkills from './6-month/LifeSkills';
import Sewing from './6-month/Sewing';

//The six week courses 

type CourseItem = {
  name: string;
  path: string;
  page: string;
  slug: string;
};
type SixMonthItem = {
  pack: number;
  name: string;
  path: string;
  slug: string;
  componenet: any;
};




import { DrawerContentScrollView } from '@react-navigation/drawer';


const SixMonth: SixMonthItem[] = [
{pack:1,name: 'FirstAid', componenet: {FirstAid},path:'../6-month/FirstAid',slug:'FirstAid'},
{pack:2,name: 'LandScaping', componenet: {LandScaping} ,path:'../6-month/LandScaping', slug:'LandScaping'},
{pack:3,name: 'LifeSkills', componenet: {LifeSkills},path:'../6-month/LifeSkills',slug:'LifeSkills'},
{pack:4,name: 'Sewing', componenet: {Sewing},path:'../6-month/Sewing', slug:'Sewing'},


];

const SixWeeks : CourseItem[] = [
{page:"1" , name: 'Cooking',  path:'../6-weeks/Cooking',slug:'Cooking'},
{page:"2" ,name: 'Gardening',  path:'../6-weeks/Gardening',slug:'Gardening'},
{page:"3" ,name: 'ChildMinding', path:'../6-weeks/Child-Minding', slug:'Child-Minding' },
];

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout(props: any) {
  
   const [expandedSections, setExpandedSections] = useState({
    SixMonth: false,
    SixWeeks: false,
    tabs: false,
  });

  const toggleSection = (key: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };


 
  return (      
<DrawerContentScrollView {...props}>

<DrawerItemList {...props} />
  
      {/* Tabs Section */}
      <TouchableOpacity onPress={() => toggleSection('tabs')}>
        <Text style={{ margin: 16, fontWeight: 'bold', fontSize: 16 }}>
          🧭 Main Tabs {expandedSections.tabs ? '▲' : '▼'}
        </Text>
      </TouchableOpacity>
      {expandedSections.tabs && (
        <View style={{ paddingLeft: 24 }}>
          <DrawerItem label="Home" onPress={() => router.push('/(tabs)')} />
        </View>
      )}


  
      <TouchableOpacity onPress={() => toggleSection('SixMonth')}>
        <Text style={{ margin: 16, fontWeight: 'bold', fontSize: 16 }}>
          📦 Six Month Courses {expandedSections.SixMonth ? '▲' : '▼'}
        </Text>
      </TouchableOpacity>
      {expandedSections.SixMonth && (
        <View style={{ paddingLeft: 24 }}>
          {SixMonth.map((item) => (
            <DrawerItem
              key={item.pack}
              label={item.name}
              onPress={() => router.push('/6-month/' + item.slug)}
            />
          ))}
        </View>
      )}

      <TouchableOpacity onPress={() => toggleSection('SixWeeks')}>
        <Text style={{ margin: 16, fontWeight: 'bold', fontSize: 16 }}>
          📦 Six Week Courses {expandedSections.SixWeeks ? '▲' : '▼'      }
        </Text>
      </TouchableOpacity>
      {expandedSections.SixWeeks && (
        <View style={{ paddingLeft: 24 }}>
          {SixWeeks.map((item) => (
            <DrawerItem
              key={item.page}
              label={item.name}
              onPress={() => router.navigate('/6-weeks/' + item.slug)}
            />
          ))}
        </View>
      )}


     
      <StatusBar style="auto" />
    </DrawerContentScrollView>
  );
}

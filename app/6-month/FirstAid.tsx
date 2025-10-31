import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, Button, Image } from 'react-native';
import { Link } from 'expo-router';
import { ImageBackground } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import LandScaping from './LandScaping';
import LifeSkills from './LifeSkills';
import Sewing from './Sewing';
import ChildMinding from '../6-weeks/Child-Minding';
import Cooking from '../6-weeks/Cooking';
import Gardening from '../6-weeks/Gardening';
import { Alert } from 'react-native';
import { useEntries } from '@/functions/DataEntries';
import { TouchableOpacity } from 'react-native';


 






export default function FirstAid() {
  const { entries, addEntry } = useEntries();

  const handleAdd = () => {
    if (entries.length >= 6) {
      Alert.alert('Limit reached', 'You can only add up to 6 courses.');
      return;
    }

    const newEntry = {
      id: 'FAID-001',
      courseName: 'First Aid',
      duration: '6 months',
      price: 1200,
    };
    addEntry(newEntry);
  };
  return(

    <ScrollView>

      
      <View
      >
        <Text
              style= {styles.infoBar}

        >
      id: FAID-001,
      courseName: First Aid,
      duration: 6 months,
      price: 1200,
      </Text>
    <View style={styles.container}>
<LinearGradient
  colors={['#0a8a30ff', '#043b04ff']}
  style={[ StyleSheet.absoluteFillObject,{
    height: 750,
    width: 360,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 20,
  }]}
  start={{ x: 1, y: 0.2 }}
  end={{ x: 0.5, y: 1 }}
/>
      <Text style={styles.header1}>Course Description</Text>

      <Text style={styles.text}>This course provides first aid awareness and the skills needed to offer basic life support.</Text>
      <Text>You’ll learn how to manage wounds and bleeding, burns, and fractures, as well as how to handle emergency scenes safely.</Text>
      <Text>This course provides first aid awareness and the skills needed to offer basic life support.</Text>
      <Text>You’ll learn how to manage wounds and bleeding, burns, and fractures, as well as how to handle emergency scenes safely.</Text>
      <Text>The program also covers cardio-pulmonary resuscitation (CPR) and responding to respiratory distress, such as choking or blocked airways, giving you the confidence to act effectively in urgent situations.</Text>
      <StatusBar style="auto" />

    </View>
<TouchableOpacity
  onPress={handleAdd}
  style={{
    backgroundColor: '#1b91e0ff',
    borderRadius: 25,
    width: 171,
    padding: 10,
    alignSelf: 'center',
    marginVertical: 20,
  }}
>
  <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
    Add to Calculate
  </Text>
</TouchableOpacity>    </View>
    
   
    
    


    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    gap: 8,
    alignContent: 'center',
    height: 700,
    width: 360,
    borderWidth: 0.01,
    alignSelf: 'center',
    lineHeight: 5, 
    margin: 199.75,
    padding: 10,
    flex: 1,

  },
  text: {
        fontFamily: 'arial',

    zIndex: 1,
        padding: 4,
        color: '#FFFF', 
        marginStart: 20,
        margin:5,
        lineHeight: 20, 
        position: 'fixed',

  },
   background: {
    flex: 1,
    resizeMode: 'cover', // or 'contain', 'stretch', etc.
  },
 header1: {
  color: '#6eb918ff',
  fontSize: 30,
  fontStyle: 'italic',
  padding: 15,
  fontWeight: '500',
  textTransform: 'uppercase'

 },
  header2: {
  color: '#6eb918ff',
  fontSize: 20,
  fontStyle: 'italic',
  fontWeight: '600',
  alignSelf: 'center',
  padding: 20
  

 },

 container3: {
      position: 'relative',
    alignItems: 'center',
    gap: 8,
    alignContent: 'center',
    height: 650,
    width: 320,
    borderWidth: 0.01,
    alignSelf: 'center',
    lineHeight: 5, 
    marginTop: 99.75,
    marginEnd: 99.5,
    padding: 10, 
    verticalAlign: 'bottom',
    marginStart: 150,
    textAlign: 'left'


 },container2:{
        position: 'relative',
    alignItems: 'center',
    gap: 8,
    alignContent: 'center',
    height: 750,
    width: 320,
    borderWidth: 0.01,
    alignSelf: 'center',
    marginTop: 199.75,
    marginEnd: 199.5,
    padding: 0.1, 
    verticalAlign: 'bottom',
    marginStart: 150,
    textAlign: 'left',
    
  
 },
   gradient: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
 infoBar: { 
         
        
        color : 'black', 
      textTransform: 'uppercase', borderRadius: 2.1, 
       fontWeight: '500',
        fontSize: 12,
      margin: 20,
      padding: 5,width: 150,
      lineHeight: 20,
      height: 190,  
      backgroundColor: '#1b91e0ff',
      borderWidth: 6

 },
 infoBox:{ 
  
  
 }

});

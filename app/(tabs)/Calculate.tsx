import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, TextInput, View ,Text, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { useEntries } from '@/functions/DataEntries';
import { MaterialIcons } from '@expo/vector-icons';







export default function Calculate() {
	const entries = useEntries((state) => state.entries);
	  
	const removeEntry = useEntries(state => state.removeEntry);
	const getTotal = useEntries(state => state.getTotal)
	 const [total, setTotal] = useState<number | null>(null); // store total here

	   const handleCalculate = () => {
	const total = getTotal;
	setTotal(total); };




	return (

					<ScrollView
	

>
		<View >
			<LinearGradient
											colors={['#ebf3ed50', '#d4f190e7']}
				 style={[StyleSheet.absoluteFill, ]}
									start={{x:0.2, y:0.51}}
									end={{x:0.21, y:0.5}}

		
		/>
			
		<View style={styles.container2}>
				
			<LinearGradient
							colors={['#0a8a30ff', '#043b04ff']}
				 style={[StyleSheet.absoluteFill,{ borderRadius: 20} ]}
				start={{x:1, y:0.2}}
				end={{x:0.5, y:1}}
				


			/>  
			
	<View >
      <Text style={styles.header1}>Logged Courses:</Text>
      {entries.map((entry) => (
		
        <View key={entry.id} style={styles.itemsBox}>
			<Text style={ styles.itemText}> Course Id: {entry.id}</Text>
          <Text style={ styles.itemText}>Course: {entry.courseName}</Text>
          <Text style={ styles.itemText}>Duration: {entry.duration}</Text>
          <Text style={ styles.itemText}>Price: R{entry.price}</Text>

		  <TouchableOpacity style={{
			alignSelf: 'flex-end',
			justifyContent: 'space-between',
			margin : 2
			
		  }}
		  onPress= {() => removeEntry(entry.id)}>
			<MaterialIcons name='remove-circle' size={26.5} color={'#df3308ff'}/>
		  </TouchableOpacity>
        </View>
      ))}
    </View>


			
			


			
		</View >
		
			 <View style= {{ flexDirection: 'row', width: 600}}> 
			  
	
	  				

<View >
	<TouchableOpacity onPress={handleCalculate} 
	style= {{ height:35, padding: 5, margin: 2, width:160,}}>
		<LinearGradient
							colors={['#0a8a30ff', '#043b04ff']}
				 style={[StyleSheet.absoluteFill,{ borderRadius: 10} ]}
				start={{x:1, y:0.2}}
				end={{x:0.5, y:1}}
				


			/>  

        <Text style={{fontSize: 19, alignSelf: 'center', color: '#ffff'}} >Calculate Total:</Text>
      </TouchableOpacity>
		</View> 

		<View style= {{ margin: 5, borderWidth: 0.48, borderRadius: 10, padding: 5

		}}>
			<Text style= {{fontSize:14, color: 'red', }}>With Discount!!</Text>
			<Text style= {{fontSize:14, color: 'red', }}>2 Course = 5%</Text>
			<Text style= {{fontSize:14, color: 'red', }}>3 Courses = 10%</Text>
			<Text style= {{fontSize:14, color: 'red', }}>More than 3 Courses= 15% </Text>
		</View>

	
			</View>
		<View style= { {width:120, height: 40, alignSelf: 'flex-start',  margin:10, padding: 2  }} >
			<LinearGradient
							colors={['#0a8a30ff', '#043b04ff']}
				 style={[StyleSheet.absoluteFill,{ borderRadius: 5} ]}
				start={{x:1, y:0.2}}
				end={{x:0.5, y:1}}
				


			/>

	{total !== null && (
        <View>
						
						

          
          <Text  style= {{fontSize: 20 , color : '#ffff', paddingTop: 10}}>R{total.toFixed(2)}</Text>
        </View>
      )}
		
	</View>



	  	</View>
		<StatusBar style="auto" />
		<View>
			<PaymentInfo/>
		</View>
		
		</ScrollView>
	);
}

function PaymentInfo(){
	return(
	<View >
			<LinearGradient
											colors={['#ebf3ed50', '#d4f190e7']}
				 style={[StyleSheet.absoluteFill, ]}
									end={{x:0.2, y:0.51}}
									start={{x:0.21, y:0.5}}

		
		/>
			
		<View style={styles.container}>
				
			<LinearGradient
							colors={[ '#ffffffff', '#fdfdfdff']}
				 style={[StyleSheet.absoluteFill,{ borderRadius: 20} ]}
			end={{x:1, y:0.5}}
				start={{x:0.2, y:0.2}}
				


			/>  


			
			
			<View>
					< TextInput placeholder='Enter Your First Name(s)' style= {styles.inputStyling}/>
					< TextInput placeholder='Enter Your Last Name(s)' style= {styles.inputStyling}/>
					< TextInput placeholder='Enter Your Email Address' style= {styles.inputStyling}/>
					< TextInput placeholder='Enter Your Phone Number'style= {styles.inputStyling}/>
			</View>
			<View>
						< TextInput placeholder=' The Street Name with the house number' style= {styles.inputStyling}/>
						< TextInput placeholder=' Suburb' style= {styles.inputStyling}/>
						< TextInput placeholder=' City' style= {styles.inputStyling}/>
						< TextInput placeholder='Province' style= {styles.inputStyling}/>
						< TextInput placeholder='Postal Code' style= {styles.inputStyling}/>
			</View>


			
		</View>
		
	</View>
	);
}






const styles = StyleSheet.create({
	container: {
		position: 'relative',
		alignItems: 'flex-start',
		gap: 8,
		alignContent: 'center',
		height: 700,
		width: 350,
		borderWidth: 0.01,
		alignSelf: 'center',
		lineHeight: 5, 
		margin: 199.75,
		padding: 10,
		flex: 1,
		borderRadius: 20,
		justifyContent: 'space-evenly'

	},
	text: {
				fontFamily: 'arial',

		zIndex: 1,
				padding: 4,
				color: '#FFFF', 
				marginStart: 20,
				margin:5,
				letterSpacing: 5

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
  color: '#349441ff',
  fontSize: 24,
  fontStyle: 'italic',
  fontWeight: '300',
  letterSpacing: 11,
  backgroundColor: "#ffff",
  marginTop: 35
  
  
  

 },

 container3: {
			position: 'relative',
		alignItems: 'center',
		gap: 8,
		alignContent: 'center',
		height: 1050,
		width: 320,
		borderWidth: 0.01,
		alignSelf: 'center',
		lineHeight: 5, 
		borderRadius: 30,
		marginTop: 199.75,
		marginEnd: 199.5,
		padding: 20, 
		verticalAlign: 'bottom',
		marginStart: 150,
		textAlign: 'left'


 },
 container2:{
				position: 'relative',
		alignItems: 'center',
		
		alignContent: 'center',
		height: 750,
		width: 350,
		borderWidth: 0.01,
		alignSelf: 'center',
		lineHeight: 5, 
		borderRadius: 30,
		
		padding: 0.1, 
		verticalAlign: 'bottom',
		marginStart: 150,
		textAlign: 'left',
		margin: 172.5,
		marginBottom: 10
	
 },
	 gradient: {
		flex: 1,
		borderRadius: 12,
		overflow: 'hidden',
	},

	inputStyling:{
		borderRadius:10,
		borderColor: '#d2dacbd0',
		backgroundColor: '#ece7e742',
		padding: 10,
		borderWidth: 1.5,
		width: 325,
		margin: 2.2,
		color: '#020202ff'

	},
	itemsBox:{
		alignSelf: 'center',
		alignContent: 'flex-start',
		justifyContent: 'space-around',
		borderWidth: 1.5,
		borderRadius: 12,
		marginBottom: 30,
		shadowOpacity: 85,
		width: 260,
		height: 75,
		borderColor: '#e6e5e5ff',
		padding : 5
	},
	itemText:{
		fontSize: 10,
		color: '#fff',
		letterSpacing: 0.25,
		fontWeight:'600',
		textTransform: 'uppercase'
		
	},

});

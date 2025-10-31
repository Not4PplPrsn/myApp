import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView,TextInput, } from 'react-native';
import { ImageBackground } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React, {useState} from 'react';





export default function Calculate() {
	return (

					<ScrollView
				
			snapToAlignment= {'center'}
			pagingEnabled
			showsHorizontalScrollIndicator={false}
			style={{ flex: 1 }}

>
		<View >
			<LinearGradient
											colors={['#ebf3ed50', '#d4f190e7']}
				 style={[StyleSheet.absoluteFill, ]}
									start={{x:0.2, y:0.51}}
									end={{x:0.21, y:0.5}}

		
		/>
			
			<View style={styles.container}>
				
			<LinearGradient
							colors={['#0a8a30ff', '#043b04ff']}
				 style={[StyleSheet.absoluteFill,{ borderRadius: 20} ]}
				start={{x:1, y:0.2}}
				end={{x:0.5, y:1}}
				


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


			
		</View></View>
		<StatusBar style="auto" />
		<View>
			<PaymentInfo/>
		</View>
		
		</ScrollView>
	);
}

function PaymentInfo(){
	return(
	<LinearGradient
	colors={['#ebf3ed50', '#d4f190e7', ]}
				 
				
		start={{ x: 1, y: 0.5 }}
      end={{ x: 0.5, y: 1 }}									
		
		>

		<View style={styles.container}>
			<LinearGradient
										colors={['#0a8a30ff', '#043b04ff']}
						style={[StyleSheet.absoluteFill,{borderRadius:20} ]}
							start={{x:1, y:2}}
							end={{x:1, y:3}}
			/>
		
		 

			
		</View>
		
		</LinearGradient>

	);
}






const styles = StyleSheet.create({
	container: {
		position: 'relative',
		alignItems: 'flex-start',
		gap: 8,
		alignContent: 'center',
		height: 500,
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
				margin:5

	},
	 background: {
		flex: 1,
		resizeMode: 'cover', // or 'contain', 'stretch', etc.
	},
 header1: {
	color: '#ffff',
	fontSize: 30,
	fontStyle: 'italic',
	padding: 15

 },
	header2: {
	color: '#ffff',
	fontSize: 16,
	fontStyle: 'italic',
	

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
		gap: 8,
		alignContent: 'center',
		height: 650,
		width: 320,
		borderWidth: 0.01,
		alignSelf: 'center',
		lineHeight: 5, 
		borderRadius: 30,
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

	inputStyling:{
		borderRadius:10,
		borderColor: 'green',
		backgroundColor: '#ece2e28e',
		padding: 10,
		borderWidth: 1.5,
		width: 325

	}


});

import React from "react";
import { StyleSheet, TouchableOpacity,View, Image, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';;

function Card() {

  return (
<LinearGradient 
    colors={['#f0f1e9', '#f0e4f2']} 
    start={{
      x: 0,
      y: 0
    }}
    end={{
      x: 1,
      y: 1
    }}
    style={styles.box}>
  <TouchableOpacity style={styles.card}>
      <View style={styles.upper}>
        <Image
        style={styles.tinyLogo}
        source={require('../images/blockie.png')}
        />
      <Text style={styles.deposit}>Deposit Request</Text>
      <View style={styles.leftRate}>
        <View style={{display:'flex', flexDirection: 'row',alignItems: 'center',}}>
        <Image
        style={styles.rating}
        source={require('../images/Rating.png')}
        />
        <Text style={styles.rate}>
          4.5
        </Text>
        </View>
        <Text style={styles.ratings}>
          245 Ratings
        </Text>
      </View> 
      </View>
      
      <View style={styles.lower}>
        <View>
          <Text style={styles.lowerText}>
            Amount
          </Text>
          <Text style={styles.lowerCash}>
            Ksh 567.56
          </Text>
        </View>
        <View style={{position:'absolute',bottom:0, right:10}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            View
          </Text>
        </TouchableOpacity>
        </View>
      </View>
  </TouchableOpacity>
  </LinearGradient>
  )
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    width:69,
    height:25,
    borderWidth: 1,
    borderColor: "rgba(51,51,51,0.8)",
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText:{
    fontSize:20,
    fontWeight:'bold',
    color:'rgba(19,63,219,0.8)'
  },
  lowerText:{
    fontSize:15,
    color:'rgba(51,51,51,1)'
  },
  lowerCash:{
    fontSize:20,
    fontWeight:'bold',
    color:'rgba(51,51,51,1)'
  },
  rate:{
    fontSize:13,
    color:"rgba(0,43,78,1)",
  },
  ratings:{
    fontSize:13,
    color:"rgba(19,63,219,1)",
  },
  leftRate:{
    width:"40%",
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  box:{
    width: 328,
    height: 94,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 16,
    shadowColor: "rgba(173,167,167,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.55,
    shadowRadius: 0,
    overflow: "hidden",
    marginVertical: 10,
  },
  upper: {
    width:'100%',
    display:'flex',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    alignItems:'center'
  },
  lower:{
    width:'100%',
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingLeft: 50,
    
  },
  tinyLogo:{
    width:32,
    height:32,
    borderRadius:16,
    margin:0,
  },
  deposit:{
    fontSize:18,
    color:"rgba(0,43,78,1)",
  },
  rating: {
   width:13,
   height: 13,
  }
});

export default Card;

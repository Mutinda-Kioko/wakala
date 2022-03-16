import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';;
const HideCard = () => {
  return (
<LinearGradient 
    colors={['#f0f1e9']} 
    start={{
      x: 0,
      y: 0
    }}
    end={{
      x: 1,
      y: 1
    }}
    style={styles.box}>
        <View style={styles.hide}>
            <Image
            style={styles.hideIcon}
            source={require('./images/Vector.png')}
            />
            <Text style={styles.hideText}>Hide</Text>
        </View>
    </LinearGradient>
  )
}

export default HideCard

const styles = StyleSheet.create({
    box:{
        width: 328,
        height: 94,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.04)",
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
        display:'flex',
      },
      hide:{
          margin: 'auto',
          paddingTop: 30,
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 250,
        },
      hideIcon:{
        marginBottom:5,
        width:25,
        height: 25,
      },
      hideText:{
        fontSize:21,
        fontWeight:'bold',
        color:"rgba(239,135,135,0.9)"
      }
})
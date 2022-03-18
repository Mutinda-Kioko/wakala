import React from 'react';
import {StyleSheet,View, TouchableOpacity,Text } from 'react-native';
import Card from '../components/Card'
import HideCard from '../components/HideCard';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default function MainScreen(props) {
  return (
    <NavigationContainer>
    <View>
    <TouchableOpacity
    style={{alignItems:'flex-start', margin:16}}
    onPress={props.navigation.openDrawer}
       >
      <Text>Menu</Text>
      </TouchableOpacity>
    <View style={styles.container}>
      <View>
        <Card/>
        <Card/>
        <HideCard/>
        <Card/>
      </View>
    </View>
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"rgba(252,248,237,1)",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

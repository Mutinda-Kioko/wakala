import React from "react";
import MainScreen from './MainScreen';

export const ProfileScreen = ({navigation}) => <MainScreen navigation={navigation} name="Profile"/>
export const DepositScreen = ({navigation}) => <MainScreen navigation={navigation} name="Deposit"/>
export const RequestScreen = ({navigation}) => <MainScreen navigation={navigation} name="Requests"/>

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {ProfileScreen, DepositScreen, RequestScreen} from './screens';
import Sidebar from './components/Sidebar';


const DrawerNavigator = createDrawerNavigator({
  ProfileScreen,
  DepositScreen,
  RequestScreen
},{
  contentComponent:props => <Sidebar {...props}/>
});
export default createAppContainer(DrawerNavigator)
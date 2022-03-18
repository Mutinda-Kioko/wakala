import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import {DrawerNavigatorItems} from 'react-navigation-drawer'

const Sidebar = (props) => {
  return (
    <ScrollView>
     <DrawerNavigatorItems {...props} />
    </ScrollView>
  )
}

export default Sidebar

const styles = StyleSheet.create({})
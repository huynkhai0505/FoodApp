import { SafeAreaView, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppBar from './component/AppBar'
import styles from './styles/styles'
import Category from './component/Category'
import Menu from './component/Menu'
import { menuData } from '../../common/Contant'

export default HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}> 
        <AppBar />
        <Category />
        <Menu />
    </SafeAreaView>
  )
}
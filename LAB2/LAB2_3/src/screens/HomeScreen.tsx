import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppSafeView from '@/components/AppSafeView'
import AppText from '@/components/AppText'

const HomeScreen = () => {
  return (
    <AppSafeView style = {styles.container}>
        <AppText variant = 'bold'>Home Screen</AppText>
    </AppSafeView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})
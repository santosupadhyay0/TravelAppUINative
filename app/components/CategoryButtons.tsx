import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CategoryButtons() {
  return (
    <View>
      <Text style={styles.catTitle} >Categories</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    catTitle:{
        fontSize: 24,
        fontWeight: 'bold'
    }
})
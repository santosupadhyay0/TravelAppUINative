import { Image } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'

export default function Home() {
  return (
    <Stack.Screen options={{
      headerTransparent: true,
      headerTitle: "",
      headerLeft : () => (
        <TouchableOpacity onPress={() => {}}
        style={{
          marginLeft:25,
          marginTop:10
        }}
        >
          <Image
            source={{ uri: 'https://pics.craiyon.com/2024-07-10/mlKvxTtHS4StXrvT-hdjtA.webp'}}
            style= {{ width:50, height:50, borderRadius:18 }}
          />

        </TouchableOpacity>        
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => {}}
        style= {{
          marginRight:25,
          backgroundColor:Colors.white,
          padding:10,
          borderRadius:10,
          marginTop: 10,
          shadowColor: Colors.black,
          shadowOffset: {width:2, height:4 },
          shadowOpacity: 0.2,
          shadowRadius:3
        }}
        >
          <Ionicons name='notifications' size={25}
          />
        </TouchableOpacity>
      )
    }}
    />
  )
  
}

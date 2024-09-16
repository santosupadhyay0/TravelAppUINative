import { Tabs } from 'expo-router';
import React from 'react';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { View } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs screenOptions={{
      tabBarStyle:{
        backgroundColor: Colors.bgColor,
        borderTopWidth: 0,
        padding: 0,
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: Colors.black,
      tabBarInactiveTintColor : '#999'
    }} >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='compass' size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Category"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='space-dashboard' size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{backgroundColor: Colors.primaryColor, paddingHorizontal: 16, paddingVertical:12, borderRadius:10, height:50 }} >
              <Ionicons name='search-outline' size={25} color={Colors.white} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Bookmark"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='bookmark' size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name='user' size={25} color={color} />
          ),
        }}
      />



    </Tabs>
  );
}

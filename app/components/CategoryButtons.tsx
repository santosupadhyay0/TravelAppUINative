import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import destinationCategories from '../data/Categories'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '../constants/Colors'

export default function CategoryButtons() {

    const itemRef = useRef<TouchableOpacity[] | null[]>([]);
    const [active, setActive] = useState(0);


    const handleSelectedCategory = (index: number) => {
        setActive(index)
    }


    return (
        <View>
            <Text style={styles.catTitle} >Categories</Text>

            <ScrollView style={{ marginVertical: 12 }} horizontal>
                {destinationCategories.map((item, index) =>
                    <TouchableOpacity
                        ref={(el) => itemRef.current[index] = el}
                        key={index}
                        onPress={() => { handleSelectedCategory(index) }}
                        style={active == index ? styles.activeIndexBtn : styles.categoryBtn}
                    >
                        <MaterialCommunityIcons
                            name={item.iconName as any}
                            size={18}
                            color={Colors.black}
                        />
                        <Text style={{ marginLeft: 5 }}>{item.title}</Text>
                    </TouchableOpacity>
                )}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    catTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    categoryBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
        margin: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4
    },
    activeIndexBtn:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
        margin: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4
    }
})
import React from 'react'
import {View, Text, TouchableOpacity, ScrollView} from 'react-native'
import { Card } from 'react-native-elements/dist/card/Card'
import styles from './Cardscss'
import './Cardscss'


export default function Cards({navigation}) {

    const datas=[
        {
            id:1,
            name: "Red Bus",
            location: "Chennai to Kanyakumari",
            timings: "6PM to 6AM",
            price: "Rs. 500"
        },
        {
            id:2,
            name: "Red Bus",
            location: "Chennai to Kanyakumari",
            timings: "6PM to 6AM",
            price: "Rs. 500"
        },
        {
            id:3,
            name: "Red Bus",
            location: "Chennai to Kanyakumari",
            timings: "6PM to 6AM",
            price: "Rs. 500"
        },
        {
            id:4,
            name: "Red Bus",
            location: "Chennai to Kanyakumari",
            timings: "6PM to 6AM",
            price: "Rs. 500"
        },
        {
            id:5,
            name: "Red Bus",
            location: "Chennai to Kanyakumari",
            timings: "6PM to 6AM",
            price: "Rs. 500"
        },
    ]

    return (
        <ScrollView>
        <View style={styles.card_full}>
            <Text style={styles.card_header}>Available Buses</Text>
            <View>
                {
                    datas.map((data) =>{
                        return(
                            <TouchableOpacity key={data.id} onPress={() => navigation.navigate('Booking')}>
                                <View style={styles.cards}>
                                    <Text style={styles.card_text}>{data.name}</Text>   
                                    <Text style={styles.card_text}>{data.location}</Text>   
                                    <Text style={styles.card_text}>{data.timings}</Text>  
                                    <Text style={styles.card_text}>{data.price}</Text>  
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
        </ScrollView>
    )
}

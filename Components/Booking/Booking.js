import React,{useState} from 'react'
import {View,Text, TouchableOpacity, Alert} from 'react-native'
import { TextInput} from 'react-native-gesture-handler'
import {Picker} from '@react-native-picker/picker';
import firebase from '../../firebase/firebase';
import styles from './Bookingcss'

export default function Booking({navigation}) {
    const [selectedValue, setSelectedValue] = useState("Male");
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [number, setNumber] = useState('');
    const [seat, setSeat] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');

    const handleBooking = () =>{
        firebase.firestore().collection("Booking").add({
            name: name,
            age: age,
            number: number,
            seat: seat,
            gender: gender,
            email: email
        }).then(() => {
            Alert.alert("Users Added Successfully")
            navigation.navigate('Payment',{email})
        })
        .catch(err => Alert.alert("Error Message", err.message))
    }
    return (
        <View style={styles.book_header}>
            <View>
                <Text style={styles.book_text}>Name : </Text>
                <TextInput  style={styles.book_textinput} placeholder="Name" 
                value={name} onChangeText={text => setName(text)}/>
            </View>
            <View>
                <Text style={styles.book_text}>Age : </Text>
                <TextInput keyboardType="numeric" style={styles.book_textinput}  placeholder="Age" 
                value={age} onChangeText={text => setAge(text)}/>
            </View>
            <View>
                <Text style={styles.book_text}>Number of seats : </Text>
                <TextInput keyboardType="numeric" style={styles.book_textinput} placeholder="Seats" 
                value={seat} onChangeText={text => setSeat(text)}/>
            </View>
            <View>
                <Text style={styles.book_text}>Mobile Number : </Text>
                <TextInput keyboardType="numeric" style={styles.book_textinput} placeholder="Number"  
                value={number} onChangeText={text => setNumber(text)}/>
            </View>
            <View>
                <Text style={styles.book_text}>Gender : </Text>
                <View style={styles.pickers}>
                    <Picker
                        selectedValue={selectedValue}
                        style={styles.pickers}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        value={gender} onChangeText={text => setGender(text)}
                    >
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Others" value="others" />
                    </Picker>
                </View>
            </View>
            <View>
                <Text style={styles.book_text}>Email : </Text>
                <TextInput style={styles.book_textinput} placeholder="Email"  
                value={email} onChangeText={text => setEmail(text)}/>
            </View>
            <TouchableOpacity style={styles.book_btn} onPress={handleBooking}>
                <Text style={styles.btn_text}>Book Now</Text>
            </TouchableOpacity>
        </View>
    )
}
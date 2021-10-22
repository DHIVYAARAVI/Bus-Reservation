import React, {useState} from 'react'
import styles from './Logincss'
import firebase from '../../firebase/firebase'
import {View,TextInput,Text, Image, TouchableOpacity, Alert} from 'react-native'

export default function Login({navigation}) {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleCreate = () =>{
        firebase.auth().signInWithEmailAndPassword(username.trim(), password.trim()).then( res => {
            Alert.alert("Login Successfull", username)
            navigation.navigate("Cards")
        }).catch(err => Alert.alert("Error Message", err.message))
    }

    return (
       <View style={styles.border}>
           <Image 
                source={require( '../../assets/2.png')} 
                style ={styles.img}
           />
           <View>
                <View>
                    <Text style={styles.text}>Username</Text>
                    <TextInput 
                    style={styles.textinput}
                    placeholder="Username"
                    value={username}
                    onChangeText={text => setUserName(text)}
                    />
                    <Text style={styles.text}>Password</Text>
                    <TextInput 
                    style={styles.textinput}
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                    />
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.btn} onPress={handleCreate}>
                        <Text style={styles.loginbtn}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.create} onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.createbtn}>Create Account</Text>
                    </TouchableOpacity>
                </View>
            </View>           
       </View>
    )
}

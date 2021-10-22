import React,{useState} from 'react'
import firebase from '../../firebase/firebase'
import styles from './Signupcss'
import {View,TextInput,Text, Image, TouchableOpacity, Alert} from 'react-native'

export default function signup({navigation}) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    console.log(name);
    const hadleLogin =()=>{
        firebase.auth().createUserWithEmailAndPassword(name.trim(),password.trim()).then(res=>{
            Alert.alert("Signup Created Successfully", name)
            navigation.navigate('Cards')
        }).catch(err=>Alert.alert("Signup",err.message))
    }
    return (
        <View style={styles.border}>
            <Image 
                 source={require( '../../assets/2.png')} 
                 style ={styles.img}
            />
            <View>
                <Text style={styles.account_title}>Create an Account</Text>
                 <View>
                     <Text style={styles.text}>Username</Text>
                     <TextInput 
                     style={styles.textinput}
                     placeholder="Username"
                     value={name}
                     onChangeText={text => setName(text)}
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
                     <TouchableOpacity style={styles.create} onPress={hadleLogin}>
                         <Text style={styles.createbtn}>Create Account</Text>
                     </TouchableOpacity>
                 </View>
             </View>           
        </View>
     )
}

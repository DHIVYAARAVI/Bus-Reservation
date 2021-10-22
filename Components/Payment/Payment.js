import React,{useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import firebase from '../../firebase/firebase';
import styles from './Paymentcss'

export default function Home({navigation,route}) {
    console.log("email",route?.params?.email);
    const [cardNo, setCardNo] = useState('');
    const [civ, setCIV] = useState('');
    const [cardName, setCardName] = useState('');

    const handlePayment = () =>{
        firebase.firestore().collection("Payment").add({
            cardNumeber: cardNo,
            CIV : civ,
            CardName : cardName
        }).then(() => {
            Alert.alert("Payment Successful", cardName);
            navigation.navigate("Bill",{email:route?.params?.email});
        }). catch((err) => {
            Alert.alert("Error Message", err.message)
        })
    }
    
    return (       
      <TouchableWithoutFeedback onPress={()=>{
          Keyboard.dismiss();
      }}>
            <View style={styles.payment_full}>
              <Text style={styles.payment_header}>Payment</Text>
              <Text style={styles.payment_text}>Card Number</Text>
              <TextInput 
              placeholder="6262 6262 6262" 
              style={styles.payment_textinput}
              keyboardType="numeric" 
              value={cardNo}
              onChangeText={text => setCardNo(text)}
              />
              <Text style={styles.payment_text}>CIV</Text>
              <TextInput 
              style={[styles.payment_textinput,styles.payment_civ]}
              keyboardType="numeric" 
              value={civ}
              onChangeText={text => setCIV(text)}
              />
              <Text style={styles.payment_text}>Card Holder</Text>
              <TextInput 
              placeholder="Card Holder Name"  
              style={styles.payment_textinput}
              value={cardName}
              onChangeText={text => setCardName(text)}
              />
              <TouchableOpacity onPress={handlePayment}>
                  <Text style={styles.pay_btn}>Pay Now</Text>
              </TouchableOpacity>
            </View>
      </TouchableWithoutFeedback>
    )
}

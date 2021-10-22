import React,{useEffect,useState} from 'react'
import {View, Text,FlatList} from 'react-native'
import styles from './Billcss'
import firebase from '../../firebase/firebase'

export default function Bill({route}) {
    console.log("Email",route?.params?.email);
    const [book,setBook]=useState([]);
    useEffect(()=>{
       firebase.firestore().collection('Booking').onSnapshot(snap=>{
           console.log(snap.docs)
           console.log("hey1")
           const data=snap.docs.map(each=>{
             if(each.data().email===route.params.email){
                 return{
                     ...each.data(),Book_id:each.id
                 }
             }
             console.log("hey2")
           })
        //    console.log("hi",data)
           setBook(data);
       })
       console.log("hey1")
    },[])

    const renderItem = ({ item }) => (
        <View>
            <Text style={styles.text}>Name: {item?.name}</Text>
            <Text style={styles.text}>Age: {item?.age}</Text>
            <Text style={styles.text}>Number of Seats: {item?.seat}</Text>
        </View>        
      );
    
    return (
        <View style={styles.bill}>
            <Text style={styles.header}>Booked Successfully</Text>
            <FlatList
                data={book}
                renderItem={renderItem}
                keyExtractor={item => item?.Book_id}
            />
        </View>
    )
}

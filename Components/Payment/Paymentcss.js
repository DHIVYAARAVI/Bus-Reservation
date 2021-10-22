import { StyleSheet } from "react-native";

export default StyleSheet.create({
    payment_full: {
        marginTop: 200,
        marginLeft: 50,
        marginRight: 50,
        borderColor: "black",
        borderWidth: 5,
        borderRadius: 10,
        padding: 10,
        paddingLeft: 15,
        backgroundColor: "#ddadaf",        
    },
    payment_header:{
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: "black",
    },
    payment_text: {
        fontSize: 22,
        marginTop: 10,
        fontWeight: "bold",
        color: "black",
    },
    payment_textinput:{
        borderWidth: 4,
        borderRadius: 5,
        width: 200,
        fontSize: 15,
        paddingLeft: 10,
        borderColor: "black",
    },
    payment_civ: {
        width: 70,
    },
    pay_btn : {
        borderWidth: 3,
        borderBottomColor: "#65000b",
        fontSize: 18,
        width: 120,
        padding: 10,
        marginTop: 35,
        marginLeft: 70,
        textAlign:"center",
        fontWeight: "bold",
        borderRadius: 5,
        backgroundColor: "#e9967a",
        color: "#65000b",
    }
});
import { Dimensions, StyleSheet } from "react-native";

const deviceSize = Dimensions.get("window")
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#e0e0e0",
    },
    image: {
        width: deviceSize.width,
        height: 250,
    },
    top_container: {
        paddingLeft: 8
    },
    title: {
        fontWeight:"bold",
        fontSize:26,
        color:"#880e4f",
    },
    area: {
        fontSize:23,
        color:"#880e4f",
    },
    indicator: {
        backgroundColor: 'gray',
        height: 1,
        width: '100%',
    },
    instruction_container: {
        flex:1,
        margin:5,
       
    },
    instruction: {
        fontSize:20,
        color:"#37474f",
    },
    button: {
        alignSelf:"center",
        backgroundColor:"#d50000",
        width:380,
        height:50,
        borderRadius:5,
        justifyContent:"center",
        alignItems:"center"
    },
    button_text: {
        fontSize:20,
        color:"white",
    }
})
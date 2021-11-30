import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container:{
        flex:1
    },
    body_container:{
        flexDirection:"row",
        backgroundColor:"#ff6f00",
        margin:10,
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
    },
    categoryName:{
        alignSelf:"center",
        color:"black",
        fontSize:25,
        fontWeight:"bold",
        padding:10,
        paddingLeft:20
        
    },
    categoryImage:{
        width:100,
        height:100,
        resizeMode:"contain",
        marginLeft:10,
        borderRadius:30
    }
})
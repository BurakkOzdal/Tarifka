import { Dimensions, StyleSheet } from "react-native";

const deviceSize=Dimensions.get("window")
export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#cfd8dc",
    },
    info_container:{
        flex:1,
        position: 'absolute',
        backgroundColor:'black',
        bottom: 0,
        width: deviceSize.width*0.95,
        opacity: 0.7,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        margin:10
    },
    title:{
        fontSize:30,
        color: 'white',
        fontWeight:'bold',
        paddingHorizontal:10,
        paddingVertical:5,
    },
    image:{
        width:deviceSize.width*0.95,
        height:200,
        resizeMode:"cover",
        borderRadius:10,
        margin:10
    }
})
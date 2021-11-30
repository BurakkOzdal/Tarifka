import React from "react";
import { Button, Image, Linking, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./MealDetailCard.styles";

function MealDetailCard({ title, area, image, instruction, youtubeLink }) {
    return (
        <ScrollView >

            <View style={styles.container}>

                <Image style={styles.image} source={{uri:image}}/>

                <View style={styles.top_container}>
                    <Text style={styles.title}> {title} </Text>
                    <Text style={styles.area}> {area} </Text>
                </View>

                <View style={styles.indicator}/>

                <View style={styles.instruction_container}>
                    <Text style={styles.instruction}> {instruction} </Text>
                </View>

               
                <TouchableOpacity style={styles.button} onPress={()=> Linking.openURL(youtubeLink)}>
                    <Text style={styles.button_text} >Watch on Youtube</Text>
                </TouchableOpacity>

            </View>

        </ScrollView>

    )
}
export default MealDetailCard;
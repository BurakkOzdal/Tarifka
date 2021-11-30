import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./MealCard.styles";

function MealCard({ title, image, id, navigation }) {

    return (
        <TouchableWithoutFeedback onPress={()=>navigation.navigate("MealDetail",{id})}>
            <View style={styles.container}>
                <Image source={{ uri: image }} style={styles.image} />
                <View style={styles.info_container}>
                    <Text numberOfLines={1} style={styles.title}>{title}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>   
    )
}

export default MealCard;
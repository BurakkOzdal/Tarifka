import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./CategoriesCard.styles";

function CategoriesCard({ categoryName, categoryImage , navigation}) {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={()=>navigation.navigate("CategoryDetail",{category:categoryName})}>
            <View style={styles.body_container}>
                <Image source={{ uri: categoryImage }} style={styles.categoryImage} />
                <Text style={styles.categoryName}>{categoryName}</Text>
            </View>
            </TouchableWithoutFeedback>
            
        </View>
    )
}
export default CategoriesCard;
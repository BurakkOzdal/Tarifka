import React from "react";
import { FlatList, Text, View } from "react-native";
import Config from "react-native-config";
import useFetch from "../../hooks/useFetch";
import CategoriesCard from "../../components/CategoriesCard";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import styles from"./Categories.styles";


function Categories({navigation}) {

    const { veri, error, loading} = useFetch(Config.CATEGORIES)

    if (loading) {
        return <Loading/>
    }

    if(error){
        return <Error/>
    }
    
    function renderCategories({item}) {
        return <CategoriesCard categoryName={item.strCategory} categoryImage={item.strCategoryThumb} navigation={navigation}/> 
    }
    return (
        <View style={styles.container}>
            <FlatList keyExtractor={item => item.idCategory} data={veri.categories} renderItem={renderCategories} />
        </View>
    )
}
export default Categories;
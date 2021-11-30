import React from "react";
import Config from "react-native-config";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import useFetch from "../../hooks/useFetch";
import { FlatList, SafeAreaView } from "react-native";
import MealCard from "../../components/MealCard/MealCard";

function CategoryDetail({route,navigation}) {
    const {category}=route.params
    const {veri, error,loading}=useFetch(`${Config.CATEGORY_FILTER}${category}`)

    if(loading){
        return <Loading/>
    }
    if(error){
        return <Error/>
    }
    function renderMeal({item}) {
        return <MealCard title={item.strMeal} image={item.strMealThumb} id={item?.idMeal} navigation={navigation}/>
    }

    return(
        <SafeAreaView>
            <FlatList keyExtractor={item => item.idMeal} data={veri.meals} renderItem={renderMeal}/>
        </SafeAreaView>
    )
}

export default CategoryDetail;
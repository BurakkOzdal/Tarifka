import React from "react";
import { View } from "react-native";
import Config from "react-native-config";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import MealDetailCard from "../../components/MealDetailCard";
import useFetch from "../../hooks/useFetch";

function MealDetail({route}) {
    const{id}=route.params;
    const{veri, error, loading}=useFetch(`${Config.MEAL_DETAIL}${id}`)

    if(loading){
        return <Loading/>
    }

    if(error){
        return <Error/>
    }
    console.log("İsmi: ",veri.meals[0].strMeal)
    return(
        <View>
            <MealDetailCard title={veri.meals[0].strMeal} area={veri.meals[0].strArea} 
            image={veri.meals[0].strMealThumb}  instruction={veri.meals[0].strInstructions}
            youtubeLink={veri.meals[0].strYoutube}
            />
        </View>
    )
}

export default MealDetail;
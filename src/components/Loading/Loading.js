import React from "react";
import AnimatedLottieView from "lottie-react-native";

const Loading=()=>{
    return(
        <AnimatedLottieView source={require("../../assets/loading.json")} autoPlay/>
    )
}

export default Loading;
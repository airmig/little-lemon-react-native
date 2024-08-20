import {View, Text} from "react-native";
import { documentStyles } from "../util/style";

export default function WelcomeScreen(){
    return  <>   
     <View style={documentStyles.welcomeContainer}>
        <Text style={documentStyles.welcomeTitle}>
            Welcome to 
            <Text style={documentStyles.welcomeSubtitle}> Little Lemon!</Text>
        </Text>
        <View style={documentStyles.welcomeTextView}>
            <Text style={documentStyles.welcomeDescription}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
        </View>
    </View></>

}
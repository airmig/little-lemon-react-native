import {View, Text, Pressable} from "react-native";
import { documentStyles } from "../util/style";

export default function WelcomeScreen({navigation}){
    return  <>   
     <View style={documentStyles.welcomeContainer}>
        <Pressable onPress={()=>navigation.navigate('Menu')} style={documentStyles.button}><Text>View Menu</Text></Pressable>
        <Pressable onPress={()=>navigation.navigate('TabExample')} style={documentStyles.button}><Text>Tap Navigation</Text></Pressable>
        <Pressable onPress={()=>navigation.navigate('DrawerExample')} style={documentStyles.button}><Text>Drawer Navigation</Text></Pressable>
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
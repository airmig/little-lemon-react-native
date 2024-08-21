import LittleLemonHeader from "./LittleLemonHeader";
import MenuItems from "./MenuItems";
import SectionItems from "./SectionItems";
import {View, Pressable, Text} from "react-native";
import { documentStyles } from "../util/style";


export default function Menu({navigation}){
    return  <View style={documentStyles.container}>
            <LittleLemonHeader/>
            <MenuItems/>
            <Pressable onPress={()=>navigation.goBack()} style={documentStyles.button} >
                <Text>Go Back</Text>
            </Pressable>
      <SectionItems/></View>
}
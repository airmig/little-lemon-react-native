import { View, Text, TextInput } from "react-native";
import { useState } from "react";
import { documentStyles } from "../util/style";

export default function TextInputSample(){
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    return <>
        <View style={documentStyles.inputView}>
            <Text clearButtonMode="always" style={documentStyles.welcomeTitle}>Text Input Example</Text>
            <TextInput style={documentStyles.inputText} value={name} onChangeText={setName} placeholder="Enter a name"/>
            <Text></Text>
            <TextInput placeholder="Comments" maxLength={200} multiline={true} style={documentStyles.inputText} value={comment} onChangeText={setComment}/>
            
            {/*
            keyboardType=number-pad, decimal-pad, numeric, email-address, phone-pad, url
            secureEntry={true|false}
            autoCorrect
            autoCompletion
            onFocus
            onBlur
            clearButtonMode only for ios
            */}
        </View>
    </>
}
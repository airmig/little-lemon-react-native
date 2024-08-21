
import * as React from 'react';
import {KeyboardAvoidingView, Pressable, View, Text} from 'react-native';
import LittleLemonHeader from './LittleLemonHeader';
import WelcomeScreen from './WelcomeScreen';
import MenuItems from './MenuItems';
import { documentStyles } from '../util/style';
import SectionItems from './SectionItems';
import TextInputSample from './TextInput';
import { Button, ScrollView, Image, ImageBackground, useColorScheme, useWindowDimensions} from 'react-native';
import { useState } from 'react';

export default function Home({navigation}) {
    const [showMenu, setShowMenu] = useState(false);
    /*dark light null
      style= colorScheme === 'light' ? 'propertyChange' : 'propertyChange'
    */
    const colorScheme = useColorScheme(); 
    const {width, height, fontScale} = useWindowDimensions();  /* gets height, width, font scale*/
  
    return <View style={documentStyles.container}>
    <LittleLemonHeader/>

    { showMenu && (
      <><MenuItems/>
      <SectionItems/></>)
    }
    <ScrollView style={documentStyles.scrollView} keyboardDismissMode="on-drag">
        { !showMenu && <><WelcomeScreen navigation={navigation}/>
        <View style={documentStyles.imageContainer}>
          <ImageBackground style={documentStyles.image} source={require('../assets/budda.jpeg')}>
            <Text style={documentStyles.imageText}>Delicious Dishes!</Text>
          </ImageBackground>
          </View>
          </> }
        <Pressable onPress={()=>setShowMenu(!showMenu)}>
          <View style={documentStyles.buttonShadow}>
          <Text style={documentStyles.button}>{ !showMenu ? 'SHOW MENU' : 'HOME'}</Text>
          </View>
        </Pressable>
    </ScrollView>

    <KeyboardAvoidingView behavior='padding'>
    { !showMenu && <TextInputSample/> }
    </KeyboardAvoidingView>
  </View>
}
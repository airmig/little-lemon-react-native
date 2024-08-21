import * as React from 'react';
import {KeyboardAvoidingView, Pressable, View, Text} from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import { documentStyles } from './util/style';
import { Menu } from 'react-native-paper';
import SectionItems from './components/SectionItems';
import TextInputSample from './components/TextInput';
import { ScrollView, Image, ImageBackground } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  return <>
          <View style={documentStyles.container}>
            <LittleLemonHeader/>

            { showMenu && (
              <><MenuItems/>
              <SectionItems/></>)
            }
        
            <ScrollView style={documentStyles.scrollView} keyboardDismissMode="on-drag">
                { !showMenu && <><WelcomeScreen/>
                <View style={documentStyles.imageContainer}>
                  <ImageBackground style={documentStyles.image} source={require('./assets/budda.jpeg')}>
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

          <View style={documentStyles.footer}>
            <Footer/>
          </View>
    </>;
}
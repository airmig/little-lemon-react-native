import * as React from 'react';
import {KeyboardAvoidingView, View} from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';
import { documentStyles } from './util/style';
import { Menu } from 'react-native-paper';
import SectionItems from './components/SectionItems';
import TextInputSample from './components/TextInput';
import { ScrollView } from 'react-native';

export default function App() {
  return <>
    <View style={documentStyles.container}>
    <LittleLemonHeader/>
    <MenuItems/>
    <SectionItems/>
   
    <ScrollView style={documentStyles.scrollView} keyboardDismissMode="on-drag">
    <KeyboardAvoidingView behavior='height'>
    <WelcomeScreen/>
    <TextInputSample/>
    </KeyboardAvoidingView>
    </ScrollView>
    
    </View>
    <View style={documentStyles.footer}>
    <Footer/>
    </View>
    </>;
}

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import { View, Image } from 'react-native';
import { documentStyles } from './util/style';
import TabExample from './components/TabExample';
import DrawerExample from './components/DrawerExample';

const Stack = createNativeStackNavigator();

function ImageTitle() { return <View style={documentStyles.navLogo}><Image style={documentStyles.navLogo} source={require('./assets/logo.png')}/></View> };

export default function App() {

  return <>
          {/*
            navigate
            push
            goBack
            popToTop
          */}
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome' 
              screenOptions={{ headerTitleStyle:{color: 'white'},
             headerStyle: { backgroundColor: '#495e57'} }}>
              <Stack.Screen options={{title: 'Home', headerTitle: (props) => <ImageTitle {...props}/>}} name='Welcome' component={Home}/>
              <Stack.Screen name='Menu' component={Menu}/>
              <Stack.Screen name="TabExample" component={TabExample}/>
              <Stack.Screen name="DrawerExample" component={DrawerExample}/>
            </Stack.Navigator>

          <View style={documentStyles.footer}>
            <Footer/>
          </View>
          </NavigationContainer>
    </>;
}
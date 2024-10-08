
import {View} from "react-native";
import { documentStyles } from '../util/style';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './WelcomeScreen';
import Menu from './Menu';
import TabExample from './TabExample';
import FetchExample from "./FetchExample";
import AsyncStorageExample from "./AsyncStorage";
const Drawer = createDrawerNavigator();


function DrawerExample(){
    return <View style={documentStyles.container}>
            {/*screenOptions={{ drawerPosition: “right” }}*/}
            <Drawer.Navigator>
              <Drawer.Screen name="Welcome" component={WelcomeScreen}/>
              <Drawer.Screen name="Menu" component={Menu} />
              <Drawer.Screen name="Tabs" component={TabExample}/>
              <Drawer.Screen name="Fetch" component={FetchExample}/>
              <Drawer.Screen name="Async" component={AsyncStorageExample}/>
            </Drawer.Navigator>
       
    </View>
}

export default DrawerExample;
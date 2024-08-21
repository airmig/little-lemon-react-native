
import {View} from "react-native";
import { documentStyles } from '../util/style';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './WelcomeScreen';
import Menu from './Menu';
import TabExample from './TabExample';
const Drawer = createDrawerNavigator();


function DrawerExample(){
    return <View style={documentStyles.container}>
            {/*screenOptions={{ drawerPosition: “right” }}*/}
            <Drawer.Navigator>
              <Drawer.Screen name="Welcome" component={WelcomeScreen}/>
              <Drawer.Screen name="Menu" component={Menu} />
              <Drawer.Screen name="Tabs" component={TabExample}/>
            </Drawer.Navigator>
       
    </View>
}

export default DrawerExample;
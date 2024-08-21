import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuItems from './MenuItems';
import SectionItems from './SectionItems';
import {View} from "react-native";
import { documentStyles } from '../util/style';
import { Ionicons } from '@expo/vector-icons';

const Tab= createBottomTabNavigator();

function TabExample(){
    return <View style={documentStyles.container}>
       
        <Tab.Navigator   screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Menu Items') {
            iconName = focused
              ? 'pause'
              : 'home';
          } else if (route.name === 'Section Items') {
            iconName =  'list';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#000' }
      })}>
            <Tab.Screen name="Menu Items"  component={MenuItems} />
            <Tab.Screen name="Section Items" component={SectionItems}/>
        </Tab.Navigator>
       
    </View>
}

export default TabExample;
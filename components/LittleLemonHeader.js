import * as React from 'react';
import {View, Text, Image} from 'react-native';
import { documentStyles } from '../util/style';

export default function LittleLemonHeader() {
    return (<View style={documentStyles.headerView}>
        <Image accessible={true} style={documentStyles.logo} source={require('../assets/logo.png')}/>
        <Text style={documentStyles.headerTitle}>
        Little Lemon
        </Text>
        </View>);
}
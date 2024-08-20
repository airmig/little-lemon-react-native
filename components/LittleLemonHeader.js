import * as React from 'react';
import {View, Text} from 'react-native';
import { documentStyles } from '../util/style';

export default function LittleLemonHeader() {
    return (<View style={documentStyles.headerView}>
        <Text style={documentStyles.headerTitle}>
        Little Lemon
        </Text>
        </View>);
}
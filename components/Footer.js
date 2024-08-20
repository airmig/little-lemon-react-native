import * as React from 'react';
import {View, Text} from 'react-native';
import { documentStyles } from '../util/style';

export default function Footer() {
    return (<View style={documentStyles.footerContainer}>
        <Text style={documentStyles.footerDescription}>
        All rights reserved by Little Lemon, 2022
        </Text>
        </View>);
}
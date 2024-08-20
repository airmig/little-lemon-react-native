import { StyleSheet } from "react-native";
export const green = '#495e57';
export const yellow = '#f4ce14';

export const documentStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: green,
    },
    footer: {
        backgroundColor: green,
    },
    headerView:{
        paddingTop: 20,
         backgroundColor: yellow
    },
    viewMenuItem: {
        flex: 0.5,
        fontSize: 15,
        color: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menuContainer: {
        flex:0.3,
        padding: 10,
    },
    menuItem: {
        fontSize: 18,
        color: yellow
    },
    headerTitle: {
         padding: 20, fontSize: 30, color: 'black'
    },
    welcomeContainer: {
        padding: 10, marginTop:'10px'
    },
    welcomeTitle: {
        fontSize: 20, color: 'white'
    },
    welcomeSubtitle: {
        fontWeight:'bold'
    },
    welcomeTextView: {
        paddingTop: 10
    },
    welcomeDescription: {
        color:'white'
    },
    footerContainer: {
        backgroundColor: '#F4CE14', marginBottom: 10
    },
    footerDescription:{
        fontSize: 10, color: 'black', textAlign: 'center'
    },
    separator:{
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'white'
    },
    sectionContainer: {
        flex: 0.5,
        padding: 10,
    },
    sectionTitle: {
        backgroundColor: '#c4c4c4',
        fontWeight:'bold',
        padding: 10
    },
    inputText: {
        backgroundColor: yellow,
        color: 'black',
        fontWeight: 'bold',
        padding: 10
    },
    inputView: {
        padding: 10,
        marginBottom: 10
    },
    scrollView:{
        flex: 0.8
    }
});
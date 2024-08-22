import AsyncStorage from "@react-native-async-storage/async-storage";
import { Switch } from 'react-native-paper';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Constants from 'expo-constants';
import { useState, useEffect } from "react";

export default function AsyncStorageExample() {

    const updateValues = async (values) => {
        try {
          const jsonValue = JSON.stringify(values);
          await AsyncStorage.setItem("values", jsonValue);
        } catch(e) {
         // Handle error
        }
      }

      const mergeValues = async (values) => {
        try {
          const jsonValue = JSON.stringify(values);
          await AsyncStorage.mergeItem("values", jsonValue);
        } catch(e) {
         // Handle error
        }
      } 

      const deleteValues = async () => {
        try {
          await AsyncStorage.removeItem("values");
        } catch(e) {
         // Handle error
        }
      } 
      clearStorage = async () => {
        try {
          await AsyncStorage.clear()
        } catch(e) {
          // Handle error
        }
       }

       const [preferences, setPreferences] = useState({
        pushNotifications: false,
        emailMarketing: false,
        latestNews: false,
      });
    
      const updateState = (key) => () =>
        setPreferences((prevState) => ({
          ...prevState,
          [key]: !prevState[key],
        }));

      const [initialMount, setMount] = useState(true);

        useEffect(() => { 
          (async () => { 
            // Populate preferences from storage using AsyncStorage.multiGet 
            try{
             console.log("clearing");

             values = await AsyncStorage.multiGet(['pushNotifications','emailMarketing','latestNews']);

              const initialState = {
                pushNotifications: values[0][1] == null ? JSON.stringify(false) : JSON.parse(values[0][1]),
                emailMarketing: values[1][1] == null ? JSON.stringify(false) : JSON.parse(values[1][1]),
                latestNews: values[2][1] == null ? JSON.stringify(false) : JSON.parse(values[2][1])
              }
              console.log("initial values", initialState);
             setPreferences(initialState);
             
            }
            catch(err){
              console.log(err.message);
              Alert.alert(`An error occurred loading: ${err.message}`); 
            }
          })(); 
        }, []); 

        // This effect only runs when the preferences state updates, excluding initial mount 
      useEffect(() => { 

            if (initialMount) {
              setMount(false);
            }
            else {
              const pushNotifications = ["pushNotifications", JSON.stringify(preferences.pushNotifications)];
              const emailMarketing = ["emailMarketing", JSON.stringify(preferences.emailMarketing)];
              const latestNews =  ["latestNews", JSON.stringify(preferences.latestNews)];
              (async () => { 
                  // Use AsyncStorage.multiSet API to persist each preference under a separate key.
                  console.log('preferences:', preferences); 
                  try{
                    await AsyncStorage.multiSet([pushNotifications,emailMarketing,latestNews]);
                  }
                  catch(err){ console.log(err.message);
                    Alert.alert(`An error occurred writing: ${err.message}`); 
                  }
              })(); 
            }
          }, [preferences]);


       return (
        <View style={styles.container}>
          <Text style={styles.header}>Account Preferences</Text>
          <View style={styles.row}>
            <Text>Push notifications</Text>
            <Switch
              value={preferences.pushNotifications}
              onValueChange={updateState('pushNotifications')}
            />
          </View>
          <View style={styles.row}>
            <Text>Marketing emails</Text>
            <Switch
              value={preferences.emailMarketing}
              onValueChange={updateState('emailMarketing')}
            />
          </View>
          <View style={styles.row}>
            <Text>Latest news</Text>
            <Switch
              value={preferences.latestNews}
              onValueChange={updateState('latestNews')}
            />
          </View>
        </View>
      );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  header: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

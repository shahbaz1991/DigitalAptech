// importing libraries and components 
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, ActivityIndicator, AppState } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from "react-redux";
import { Styles } from './common/index';
import { NavigationContainer } from "@react-navigation/native";
import AppStackNavigator from './NavigationStack/AppStackNavigator';
import AuthStackNavigator from './NavigationStack/AuthStackNavigator';
import { getData } from './utils/storage';
import TextLabel from './components/TextLabel';
import Color from './common/Color';
import { updateUser } from './redux/action';

const App = (props) => {
  const [active, setActive] = useState(true);
  const [appLoader, setAppLoader] = useState(false);

  //checks for token in local storage if the user is not logged out 
  useEffect(() => {
    setAppLoader(true)
    async function checkUser() {
      const token = await getData('TOKEN')
      if(token){
        props.updateUser({token:token})
        setAppLoader(false)
      } else {
        setAppLoader(false)
      }
    }
    checkUser();
  },[]);

  return (
    <>
      {
        appLoader
          ? <View style={[Styles.Common.ColumnCenter, { flex: 1 }]}>
            <ActivityIndicator size="large" color={Color.green} />
            <TextLabel
             color={'green'}
             isClickable={false}
             label={'Loading...'}
            />
          </View>
          :
          <NavigationContainer>
            {
              props.user.token
                ?
                <AppStackNavigator />
                :
                <AuthStackNavigator />
            }
          </NavigationContainer>
      }

    </>
  );
}

const mapStateToProps = ({ netInfo, user, settings }) => ({ netInfo, user, settings });

const mapDispatchToProps = (dispatch) => {
  return{
    updateUser : (value)=> dispatch(updateUser(value))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
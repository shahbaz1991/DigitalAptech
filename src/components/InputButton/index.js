import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  ActivityIndicator
} from "react-native";
import styles from "./styles";

const InputButton = props => {
  let wrapper = styles.container;
  let button = styles.button;
  let container = {};
  let padding = styles.buttonPadding;
  
  
  if(props.color=='green')
  {
    container = styles.colorGreen
  }else if(props.color=='red')
  {
    container = styles.colorRed
  }

  if(props.onlyPadding)
  {
    container = {...container,...padding,...wrapper}
  }else{
    container = {...container,...wrapper,...button}
  }

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={container}
      disabled={props.isLoading}
    >
      {
        props.isLoading ?
        <ActivityIndicator size="small" color="#FFFFFF"/>
        :
        <Text style={styles.label}>{props.label}</Text>
      }
      
    </TouchableOpacity>
  );
};

export default InputButton 

import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  ActivityIndicator
} from "react-native";
import styles from "./styles";

const TextLabel = props => {

  let color = '';
  let borderColor = '';
  let label = styles.label;

  if(props.color=='green')
  {
    color = styles.colorGreen
    borderColor = "green"
  }else if(props.color=='red')
  {
    color = styles.colorRed
    borderColor = "red"
  }

  label = {...label,...color}
  if(props.isClickable)
  {
    return (
      <TouchableOpacity
        onPress={props.onPress}
        style={[styles.container,{borderColor:borderColor}]}
       // disabled={props.isLoading}
      >
          <Text style={label}>{props.label}</Text>
      </TouchableOpacity>
    );
  }else{
    return (
        <Text style={label}>{props.label}</Text>
        );
  }
  
  
};

export default TextLabel 

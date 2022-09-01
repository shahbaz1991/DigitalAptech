import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Image
} from "react-native";
import styles from "./styles";

const InputText = props => {
 
  return (


    <View style={{flexDirection:'row'}}>
    <TextInput
      onChangeText={(text) => props._onChangeText(props.name, text)}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
      autoCorrect={false}
      maxLength={props.maxLength}
      editable={props.editable}
      style={[styles.textBox,props.hasRightIconClickable && {paddingRight:50}]}
      placeholderStyle={[styles.textBoxPlaceHolder,props.hasRightIconClickable && {paddingRight:50}]}
      secureTextEntry={props.secureTextEntry}
      autoCapitalize={props.autoCapitalize}
      value={props.value}
    />
    {
      props.name=='password' && props.secureTextEntry && 
      <TouchableOpacity  disabled={(props.value.length != 0) ? false : true} style={styles.rightImageBox} onPress={props.onPressRightIcon}>
          <Image
            style={styles.icon}
            source={props.hasRightIconClickable}
          />
        </TouchableOpacity>
    }
    {
      props.name=='password' && !props.secureTextEntry && 
      <TouchableOpacity  disabled={(props.value.length != 0) ? false : true} style={styles.rightImageBox} onPress={props.onPressRightIcon}>
          <Image
            style={styles.icon}
            source={props.hasRightIconClickableChange}
          />
        </TouchableOpacity>
    }

    {
      props.name=='dob' && 
      <TouchableOpacity style={styles.rightImageBox} onPress={props.onPressRightIcon}>
          <Image
            style={styles.icon}
            source={props.hasRightIconClickable}
          />
        </TouchableOpacity>
    }


   
    
    
    </View>
  );
};

export default  InputText

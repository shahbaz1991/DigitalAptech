import { Dimensions, StyleSheet } from "react-native";
import { Color, Config } from "@common";

const container = {
    marginTop:Config.button.marginTop,
    borderRadius:Config.button.borderRadius,
}
export default StyleSheet.create({
  container:{
    ...container
  },
  button:{
    ...Config.button
  },
  colorGreen: {
    backgroundColor:Color.green,
  },
  colorRed: {
    backgroundColor:Color.red,
  },
  buttonPadding: {
    padding:Config.button.padding,
    paddingLeft:20,
    paddingRight:20,
  },
  label:{
    alignSelf: "center",
    color:Color.primary,
    fontFamily:Config.Font.family.Regular,
    fontSize:Config.Font.size.LG,
  }
});


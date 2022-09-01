import { Dimensions, StyleSheet } from "react-native";
import { Color, Config } from "@common";

const container = {
    marginTop:Config.button.marginTop,
    marginBottom:Config.button.marginTop,
    alignSelf:'center',
    borderBottomWidth:1
}
export default StyleSheet.create({

  container:{
    ...container
  },
  colorGreen: {
    color:Color.green,
  },
  colorRed: {
    color:Color.red,
  },
  label:{
    fontFamily:Config.Font.family.Regular,
    fontSize:Config.Font.size.LG,
  },
});


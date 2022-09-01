import { Dimensions, StyleSheet } from "react-native";
import { Color, Config } from "@common";


export default StyleSheet.create({

  textBox:{
    color:Color.textBoxLabel,
    borderBottomWidth:Config.textBox.borderBottomWidth,
    borderBottomColor:Color.textBoxLabel,
    height:Config.textBox.height,
    width:Config.textBox.width,
    fontFamily:Config.Font.family.SemiBold,
    fontSize:Config.Font.size.LG,
    marginTop:Config.textBox.marginTop,
    marginBottom:Config.textBox.marginBottom,
    paddingBottom:Config.textBox.paddingBottom,
  },
  textBoxPlaceHolder:{
    color:Color.lightGrey,
    borderBottomWidth:Config.textBox.borderBottomWidth,
    borderBottomColor:Color.textBoxLabel,
    height:Config.textBox.height,
    width:Config.textBox.width,
    fontFamily:Config.Font.family.SemiBold,
    fontSize:Config.Font.size.LG,
    marginTop:Config.textBox.marginTop,
    marginBottom:Config.textBox.marginBottom,
    paddingBottom:Config.textBox.paddingBottom,
  },
  rightImageBox:{
    position:'absolute',
    alignSelf:'center',
    right:0,
    justifyContent:'center',
  },
  icon:{
    width:Config.textBox.IconSize,
    height:Config.textBox.IconSize,
  },
});


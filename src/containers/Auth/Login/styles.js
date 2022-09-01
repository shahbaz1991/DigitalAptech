import { Dimensions, StyleSheet } from "react-native";
import { Color, Config,Styles } from "@common";
export default StyleSheet.create({
  container: {
    ...Styles.Common.ColumnCenter,
    flexGrow: 1,
    backgroundColor:Color.primary
  },
  iconWrapper:{
    marginTop:20,
    marginBottom:20,
  },
  logo: {
    width: Config.logo.width,
    height: Config.logo.height,
  },
  cardInnerWrapper:{
    ...Styles.Common.ColumnCenter,
    padding:10,
  },
  heading:{
    fontFamily:Config.Font.family.Regular,
    fontSize:Config.Font.size.EL,
    color:Color.blue
  },
  footerTextBlack:{
    fontFamily:Config.Font.family.Regular,
    fontSize:Config.Font.size.MD,
    color:Color.textDark,
    alignSelf:'flex-end'
  },

  footerTextRed:{
    fontFamily:Config.Font.family.Regular,
    fontSize:Config.Font.size.MD,
    color:Color.error,
  },
  dontHaveAccount:{
    fontFamily:Config.Font.family.Regular,
    fontSize:Config.Font.size.SM,
    color:Color.textDark,
    marginTop:20,
  },

});

import { Dimensions, StyleSheet } from "react-native";
import { Color, Config,Styles } from "@common";
export default StyleSheet.create({
  container:{
    paddingLeft:20,
    paddingRight:20
  },
  logo: {
    width: Config.logo.width,
    height: Config.logo.height,
  },
  heading:{
    fontFamily:Config.Font.family.SemiBold,
    fontSize:Config.Font.size.EL,
    color:Color.textDark,
  },
  menuWrapper:{
    ...Styles.Common.RowBetween,
    paddingTop:Config.homeScreenMenuPadding,
    paddingLeft:5,
    paddingRight:5
  },
  menuLabel:{
    fontFamily:Config.Font.family.Bold,
    fontSize:Config.Font.size.RG,
    color:Color.textDark
  },
  menuLabelActive:{
    fontFamily:Config.Font.family.Bold,
    fontSize:Config.Font.size.RG,
    color:Color.blue
  },
  subMenuLabel:{
    fontFamily:Config.Font.family.Bold,
    fontSize:Config.Font.size.MD,
    color:Color.textDark
  },
  subMenuLabelActive:{
    fontFamily:Config.Font.family.Bold,
    fontSize:Config.Font.size.MD,
    color:Color.blue
  },
  menuDevider:{
    borderRightWidth:1,
    borderRightColor:Color.textBoxBorder,
    flex:1,
    alignItems:'center'
  },
  subMenuDevider:{
    borderBottomWidth:1,
    borderBottomColor:Color.textBoxBorder,
    flex:1,
    height:60,
    alignItems:'center',
    justifyContent:'center'
  },
  circleCardHeading:{
    fontFamily:Config.Font.family.SemiBold,
    fontSize:Config.Font.size.LG,
    color:Color.textDark
  },
  circleCardRoundLabel:{
    fontFamily:Config.Font.family.SemiBold,
    fontSize:Config.Font.size.MD,
    color:Color.textDark
  },
  circleCardLabel:{
    fontFamily:Config.Font.family.SemiBold,
    fontSize:Config.Font.size.SM,
    color:Color.textDark,
    margin:5
  },
  noCircleWrapper:{
    height:100,
    justifyContent:'center',

  },
  noCircle:{
    fontFamily:Config.Font.family.Regular,
    fontSize:Config.Font.size.LG,
    color:Color.red,
    textAlign:'center'
  },
  cardContainer: {
    marginBottom: '4%', 
    borderColor: Color.green, 
    borderRadius:15, 
    borderWidth:1, 
    paddingVertical: '2%', 
    marginHorizontal: '4%' 
  },
  screenHeading: {
    textAlign:'center', 
    color: Color.green, 
    marginVertical: '2%'
  }
});

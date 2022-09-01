import { Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export default {
  token: '',
  appPadding: 10,
  showStatusBar: false,
  api: {
    prod: false
  },
  SplashScreen: {
    Duration: 2000,
  },
  appHeaderHeight: 60,
  appFooterHeight: 50,
  footer: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  IconSize: {
    EL: 30,
    LG: 20,
    MD: 16,
    SM: 12
  },
  Font: {
    family: {
      ExtraBold: "Overpass-ExtraBold",
      Bold: "Overpass-Bold",
      SemiBold: "Overpass-SemiBold",
      ExtraLight: "Overpass-ExtraLight",
      Light: "Overpass-Light",
      Regular: "Overpass-Regular",
      Thin: "Overpass-Thin"
    },
    size: {
      EL: 30,
      LG: 20,
      RG: 16,
      MD: 14,
      SM: 12
    }
  },
  logo: {
    height: 200,
    width: 200
  },
  textBox: {
    borderBottomWidth: 1,
    height: 60,
    width: 250,
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 3,
    IconSize: 30
  },
  button: {
    padding: '2%', 
    marginTop: '2%',
    borderRadius: 22
  }
};

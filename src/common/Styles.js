import { Dimensions, Platform } from "react-native";
const { height, width } = Dimensions.get("window");
const Styles = {
  width,
  height: Platform.OS !== "ios" ? height : height - 20,
};

Styles.Common = {
  ColumnCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  RowCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  RowCenterTop: {
    flexDirection: "row",
    justifyContent: "center",
  },
  RowCenterBottom: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  RowCenterLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  RowCenterRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  RowCenterBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  RowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ColumnCenterStart: {
    justifyContent:'center',
    alignItems:'flex-start'
  },
  ColumnCenterEnd: {
    justifyContent:'center',
    alignItems:'flex-end'
  },
};

export default Styles;

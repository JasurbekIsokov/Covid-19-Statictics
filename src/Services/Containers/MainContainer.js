import { connect } from "react-redux";

import Main from "../../Layouts/Main/main.js";
import {
  getRegionsAction,
  getProvincesAction,
  getReportsAction,
  selectRegionsAction,
} from "../Actions/actions.js";

const getMyState = (state) => {
  return state;
};

export const MainContainer = connect(getMyState, {
  getRegionsAction,
  getReportsAction,
  getProvincesAction,
  selectRegionsAction,
})(Main);

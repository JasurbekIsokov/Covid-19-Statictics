import { getProvincesList, getRegionsList } from "../../Components/API.js";

const REGIONS = "getRegions";
const PROVINCES = "getProvinces";
const REPORTS = "getReports";
const TOTALREPORT = "getTotalReport";
const SELECT_REGION = "selectRegion";

// Regionlarni olib keladigan action
const getRegionsAction = () => async (dispatch, getState) => {
  const data = await getRegionsList("regions");
  dispatch({
    type: REGIONS,
    payload: data,
  });
};

const selectRegionsAction = (id) => {
  return {
    type: SELECT_REGION,
    payload: id,
  };
};

// Provinsiyalarni olib keladigan action
const getProvincesAction = (regionsId) => async (dispatch, getState) => {
  const provinces = await getProvincesList(regionsId);
  // console.log(provinces.data.data);
  dispatch({
    type: PROVINCES,
    payload: provinces.data,
  });
};

// endi  provinsiyalarni olib keladian container qilaman

const getReportsAction = () => {
  return {
    type: REPORTS,
    // payload: data,
  };
};

const getTotalReportAction = () => {
  return {
    type: TOTALREPORT,
    // payload: data,
  };
};

export {
  REGIONS,
  REPORTS,
  PROVINCES,
  TOTALREPORT,
  SELECT_REGION,
  getRegionsAction,
  getReportsAction,
  getProvincesAction,
  selectRegionsAction,
  getTotalReportAction,
};

import { getProvincesList, getRegionsList } from "../../Components/API.js";

const REGIONS = "getRegions";
const PROVINCES = "getProvinces";
const REPORTS = "getReports";
const TOTALREPORT = "getTotalReport";
const SELECT_REGION = "selectRegion";

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

const getProvincesAction = (regionsId) => async (dispatch, getState) => {
  const provinces = await getProvincesList(`provinces`, regionsId);
  dispatch({
    type: PROVINCES,
    payload: provinces.data,
  });
};

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

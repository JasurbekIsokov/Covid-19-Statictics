const REGIONS = "getRegions";
const PROVINCES = "getProvinces";
const REPORTS = "getReports";
const TOTALREPORT = "getTotalReport";

const getRegionsAction = () => {
  return {
    type: REGIONS,
    payload: data,
  };
};

const getProvincesAction = () => {
  return {
    type: PROVINCES,
    payload: id,
  };
};

const getReportsAction = () => {
  return {
    type: REPORTS,
    payload: data,
  };
};

const getTotalReportAction = () => {
  return {
    type: TOTALREPORT,
    payload: data,
  };
};

export {
  REGIONS,
  PROVINCES,
  REPORTS,
  TOTALREPORT,
  getProvincesAction,
  getRegionsAction,
  getReportsAction,
  getTotalReportAction,
};

import { PROVINCES, REGIONS } from "../Actions/actions.js";

export const initialState = {
  regions: [],
  id: null,
  provinces: [],
  reports: [],
};

const Reducers = (state = initialState, action) => {
  if (action.type === REGIONS) {
    return {
      regions: [...state.regions, action.payload],
      id: state.id,
      provinces: [...state.provinces],
    };
  }

  if (action.type === PROVINCES) {
    state.provinces = [];
    return {
      regions: state.regions,
      id: state.id,
      reports: state.reports,
      provinces: action.payload,
    };
  }

  return state;
};

export default Reducers;

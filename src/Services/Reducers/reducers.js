import { PROVINCES, REGIONS } from "../Actions/Actions";

const initialState = { regions: [], id: null, provinces: [], reports: [] };

const Reducers = (state = initialState, action) => {
  if (action.type === REGIONS) {
    return {
      regions: [...state.regions, action.payload],
      id: state.id,
      provinces: [...state.provinces],
    };
  }

  if (action.payload === PROVINCES) {
    return {
      regions: [...state.regions, action.payload],
      id: state.id,
      provinces: [...state.provinces],
    };
  }

  return state;
};

export default Reducers;

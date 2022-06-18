import axios from "axios";

const getRegionsList = (path) => {
  const data = axios.get(`https://covid-19-statistics.p.rapidapi.com/${path}`, {
    headers: {
      "X-RapidAPI-Key": "aa5d36d25cmsh7dc2b96a05ea077p1a5d0cjsn3c865bab7003",
      "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
    },
  });

  return data;
};

const getProvincesList = (id) => {
  console.log(id);
  const data = axios.get(
    `https://covid-19-statistics.p.rapidapi.com/provinces`,
    {
      params: { iso: `${id}` },
      headers: {
        "X-RapidAPI-Key": "aa5d36d25cmsh7dc2b96a05ea077p1a5d0cjsn3c865bab7003",
        "X-RapidAPI-Host": "covid-19-statistics.p.rapidapi.com",
      },
    }
  );

  return data;
};

export { getRegionsList, getProvincesList };

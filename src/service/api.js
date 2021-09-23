import axios from "axios";

const getData = {
  getCountries() {
    return axios
      .get("https://api.covid19api.com/countries")
      .then((response) => response.data);
  },
  getCaseStatus(selectedCountryID) {
    return axios.get(
      `https://api.covid19api.com/total/country/${selectedCountryID}`
    );
  },
  getMapData(selectedCountryID) {
    return import(
      `@highcharts/map-collection/countries/${selectedCountryID}/${selectedCountryID}-all.geo.json`
    );
  },
  getSummary() {
    return axios.get(`https://api.covid19api.com/summary`);
  },
};
export default getData;

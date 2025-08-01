import axios from "axios";

export const totalApi = axios.create({
  baseURL: "https://covid-19-statistics.p.rapidapi.com/reports",
  headers: {
    "x-rapidapi-key": "7f89c14a69msh903c9527c1a3679p126e1ajsnbc8f34d5714b",
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
  },
});

export const detailApi = axios.create({
 baseURL: "https://covid-193.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "7f89c14a69msh903c9527c1a3679p126e1ajsnbc8f34d5714b",
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
});

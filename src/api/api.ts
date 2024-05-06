import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_BASE;

const solutionController = axios.create({
  baseURL: serverUrl + "/api/solution",
});

const problemController = axios.create({
  baseURL: serverUrl + "/api/problem",
});

const Api = {
  solutionController,
  problemController,
};

export default Api;

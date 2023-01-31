import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "https://mks-challenge-api-frontend.herokuapp.com/api/v1",
};

export const client: AxiosInstance = axios.create(config);
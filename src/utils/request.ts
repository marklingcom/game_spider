import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { config } from '../config/index.js';

let axiosClient: AxiosInstance | null = null;

export const getAxiosClient = (): AxiosInstance => {
  if (axiosClient) {
    return axiosClient;
  }
  let axiosConfig: AxiosRequestConfig = {
    timeout: 30000,
  };
  if (config.serverConfig.proxy.enable) {
    const proxyAgent = new HttpsProxyAgent(config.serverConfig.proxy.server);
    axiosConfig = {
      ...axiosConfig,
      httpAgent: proxyAgent,
      httpsAgent: proxyAgent,
      proxy: false,
    };
  }

  axiosClient = axios.create(axiosConfig);
  return axiosClient;
};

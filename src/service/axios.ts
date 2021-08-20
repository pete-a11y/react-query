import axios from 'axios';

import * as config from 'config';

import * as interceptors from './interceptors';

const baseConfig = {
  baseURL: `${config.API_URL}/`,
};

const axiosInstance = axios.create(baseConfig);

axiosInstance.interceptors.response.use(interceptors.responseErrorCode200Filter);

export default axiosInstance;

import { AxiosError, AxiosResponse } from 'axios';

export const responseErrorCode200Filter = (response: AxiosResponse) => {
  if (!response.data.success && response.data.error) {
    const error: AxiosError = {
      response,
      isAxiosError: true,
      config: response.config,
      message: response.statusText,
      name: 'ERROR',
      toJSON: () => ({ name: 'ERROR' }),
    };
    return Promise.reject(error);
  }

  return response;
};

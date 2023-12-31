import axios, { AxiosError, AxiosResponse } from 'axios';

/*
 * This could change, but basic setup for axios
 */
const inDev = __DEV__;

// set default base
axios.defaults.baseURL = inDev
  ? 'http://localhost:3000/api'
  : 'https://hireme.com/api'; // will need to change
// parse data from response
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

// intercept the response only used for unhappy path
// axios.interceptors.response.use(
//   (response) => response,
//   (e: AxiosError) => {
//     const { data, status } = e.response as AxiosResponse;
//     switch (status) {
//       case 400:
//         if (data.error) {
//           // if we have data about error console it
//           console.error(data.error);
//           throw data.error;
//         } else {
//           throw new Error('Bad Request');
//         }
//       case 401:
//         throw new Error('Unauthorized');
//     }
//     return Promise.reject(data.error);
//   }
// );

// requests obj
export const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

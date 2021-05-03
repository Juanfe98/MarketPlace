import axios from 'axios';

export const axiosInstance = axios.create({
  // baseURL: 'https://market-place-backapi.herokuapp.com/api/v1/',
  baseURL: 'http://192.168.1.11:3000/api/v1/',
  responseType: 'json',
  timeout: 1000,
});

// axiosInstance.interceptors.request.use(
//   config => {
//     console.log(
//       `${config.method.toUpperCase()} request sent to ${
//         config.url
//       } at ${new Date().getTime()}`,
//     );

//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );

import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://192.168.20.28:3000/api/v1/',
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

import axios from 'axios';

export const createAPI = () => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === 401) {
      window.location.href = `/login`;
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

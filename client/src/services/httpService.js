import axios from "axios";
import { toast } from "react-toastify";

// axios intercept any errors from the backend and will display a toast in the from
axios.interceptors.response.use(null, (err) => {
  const { response } = err;

  if (!response) {
    toast.error("Bad connection to server");
  }

  if (response && response.status >= 403) {
    toast.error("An unexpected error");
  }

  return Promise.reject(err);
});

// a Function that sets default header to any request (key , value) - in our case -> 'x-auth-token' = 'token'
export function setDefaultCommonHeader(header, value) {
  axios.defaults.headers.common[header] = value;
}

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  setDefaultCommonHeader,
};

export default httpService;

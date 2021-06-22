import axios from "axios";
import toFormData from "object-to-formdata";
import Account from "./helpers/Account";

const API_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = Account.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
}, (e) => Promise.reject(e))

class Api {
  static url = API_URL;

  static login(email, password) {
    return api.post('/users/login', { email, password })
  }

  static register(data, uploadProcess) {
    return api.post('/users/register', toFormData.serialize(data), {
      onUploadProgress: uploadProcess,
    })
  }

  static usersList() {
    return api.get('/users/list')
  }

  static createDirectGroup(memberId) {
    return api.post('/groups/direct', { memberId })
  }

  static getMessages(groupId) {
    return api.get(`/messages/${groupId}`)
  }
}

export default Api

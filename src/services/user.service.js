import axios from 'axios';
import authHeader from './auth-header';


class UserService {
  getPublicContent() {
    return axios.get('https://backend.wawgte.com/user');
  }

  getUserBoard() {
    return axios.get('https://backend.wawgte.com/user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get('https://backend.wawgte.com/user', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get('https://backend.wawgte.com/user', { headers: authHeader() });
  }
}

export default new UserService();
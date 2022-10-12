import request from './request';

export default {
  login(param) {
    request.get('/login',param);
  },
  resetPwd(data) {
    request.post('/resetPwd',data);
  }

}
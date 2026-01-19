import request from '../../utils/request';

// 用户相关API
export function listAllUser(params) {
  return request({
    url: '/api/system/user/list',
    method: 'get',
    params
  });
}
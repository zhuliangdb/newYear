import request from '../../../utils/request';

// 仓库相关API
export function listWarehouse(params) {
  return request({
    url: '/api/mes/wm/warehouse/list',
    method: 'get',
    params
  });
}

export function getTreeList(params) {
  return request({
    url: '/api/mes/wm/warehouse/tree',
    method: 'get',
    params
  });
}